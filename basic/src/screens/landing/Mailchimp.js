import React from "react"
import jsonp from "jsonp"
import PropTypes from 'prop-types';

class Mailchimp extends React.Component {
  state = {};

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields.map(field => {
      return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
    }).join("&");
    const path = `${action}&${values}`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state['EMAIL'];
    (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: 'duplicate' });
      } else if (err) {
        this.setState({ status: 'error' });
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' });
      } else {
        this.setState({ status: 'success' });
      };
    });
  }

  render() {
    const { fields, styles } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages
    }
    const { status } = this.state;
    return (
      <div className="h-full w-full">
        <div className="flex flex-col">
        <form onSubmit={this.handleSubmit.bind(this)} className="w-1/2 pt-6">
          {fields.map(input =>
            <div className="flex flex-col my-3" key={input.name}>
              <input
                {...input}
                key={input.name}
                onChange={({ target }) => this.setState({ [input.name]: target.value })}
                defaultValue={this.state[input.name]}
                style={{ WebkitAppearance: 'none', outline: 'none' }}
                className="font-lato bg-gray-100 rounded-full p-3 py-4"
              />
            </div>
          )}
          <button
            disabled={status === "sending" || status === "success"}
            type="submit"
            className="rounded-full py-4 mt-8 bg-red text-black w-1/2 h-12 shadow"
          >
            {messages.button}
          </button>
          <div className='msg-alert p-12'>
            {status === "sending" && <p style={styles.sendingMsg}>{messages.sending}</p>}
            {status === "success" && <p style={styles.successMsg}>{messages.success}</p>}
            {status === "duplicate" && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
            {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
            {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
          </div>
        </form>
        </div>
      </div>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for signing up!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many signup attempts for this email address",
    button: "Let's Go!"
  },
  styles: {
    sendingMsg: {
      color: "#0652DD"
    },
    successMsg: {
      color: "#009432"
    },
    duplicateMsg: {
      color: "#EE5A24"
    },
    errorMsg: {
      color: "#ED4C67"
    }
  }
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
};

export default Mailchimp;