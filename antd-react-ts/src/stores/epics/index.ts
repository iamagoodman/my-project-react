import { combineEpics } from "redux-observable";
import { observable } from "rxjs";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from "rxjs/observable/dom/ajax";

import {
  WIKI_REQUEST,
  fetchWiKiFail,
  fetchWiKiSuccess
} from "../actions";

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';
function fetchwikisEpic(action$) {
  return action$
    .ofType(WIKI_REQUEST)
    .switchMap(() => {
      return ajax
        .getJSON(url)
        .map(data => data.results)
        .map(wikis => wikis.map(wiki => ({
          id: wiki.id,
          title: "whisky.title,",
          imageUrl: wiki.img_url
        })))
        .map(wikis => wikis.filter(wiki => !!wiki.imageUrl))
      })
    .map(wikis => fetchWiKiSuccess(wikis)) // map the resulting array to an action of type FETCH_wikis_SUCCESS
     .catch(error => Observable.of(fetchWiKiFail(error.message)))
}

export const rootEpic = combineEpics(fetchwikisEpic);