import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebconfService {

  constructor() { }
  Grid = {
    'display':'grid',
    'grid-template-rows': 'repeat(20, 5%)',
    'grid-template-columns': 'repeat(20, 5%)',
    'height':'100%',
    'width':'100%'
  }
  Presets = [
    {
      name: 'test',
      style: {

      },
      divs: {

      }
    },
    {
      name: 'default',
      style: {
        'display':'grid',
        'grid-template-rows': '5% 95%',
        'grid-template-columns': '10% 80% 10%',
        'background-color':'gray',
        'height':'100%',
        'width':'100%'
      },
      divs: [
        {
          id:'nav',
          class: 'nav',
          style: {
            'grid-area':'1/1/1/span 3',
            'background-color':'red'
          }
        },
        {
          id:'content',
          class: 'content',
          style: {
            'grid-area':'2/2',
            'background-color':'white'
          }
        },
      ]
    },

    {
      name: 'default2',
      style: {
        'display':'grid',
        'grid-template-rows': '5% 95%',
        'grid-template-columns': '10% 80% 10%',
        'background-color':'gray',
        'height':'100%',
        'width':'100%'
      },
      divs: [
        {
          id:'nav',
          class: 'nav',
          style: {
            'grid-area':'1/1/1/span 3',
            'background-color':'red'
          }
        },
        {
          id:'content',
          class: 'content',
          style: {
            'grid-area':'2/2',
            'background-color':'white'
          }
        },
      ]
    },

    {
      name: 'dnevnik',
      style: {
        'display':'grid',
        'grid-template-rows': '10% 90%',
        'grid-template-columns': '10% 80% 10%',
        'background-color':'white',
        'height':'100%',
        'width':'100%'
      },
      divs: [
        {
          id:'naviii',
          class: 'nav',
          style: {
            'grid-area':'1/1/1/span 3',
            'background-color':'green'
          }
        },
        {
          id:'contentiiii',
          class: 'content',
          style: {
            'grid-area':'2/2',
            'background-color':'white'
          }
        },
        {
          id:'ayyy',
          class: 'lmao',
          style: {
            'grid-area':'2/2',
            'background-color':'black'
          }
        },
      ]
    }
  ]
}
