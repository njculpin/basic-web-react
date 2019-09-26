import axios from 'axios';
import LRUCache from 'lru-cache';
import { cacheAdapterEnhancer } from 'axios-extensions';

const hacker = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    defaultCache: new LRUCache({ maxAge: 24 * 3600 * 1000, size: 1500 }),
  }),
});

export const getStories = async () => {
  try {
    let results = await hacker.get('topstories.json?print=pretty')
    return results.data
  } catch (e) {
    console.log(e)
  }
}

export const getIndividualStory = async () => {
  try {
    let temp = []
    let list = await getStories()
    let topTen = list.slice(0,10)
    for (const [index, value] of topTen.entries()) {
      let item = await hacker.get('item/'+value+'.json?print=pretty')
      temp.push(item)
    }
    return temp
  } catch (e) {
    console.log(e)
  }
}
