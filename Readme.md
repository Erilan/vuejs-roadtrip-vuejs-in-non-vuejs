# Vuejs in Non vuejs demo

> Demos used in my talk about Using Vuejs in non Vuejs projects

## Demo

Including Vue instance in different way in a symfony stack : isolated, synchronized with store (Vuex), stated with routing (Vue router)

## Running

This symfony instance has to be behind a webserver (like an apache in docker)
We use Webpack Encore to speed up the setup

``` bash
# install dependencies
$ composer install // install symfony vendors
$ npm install

# build assets part
$ npm run dev
```

## Talk

This demo is used at Vue.js Roadtrip Paris 2018

[Slides](https://app.ludus.one/e93ff83f-b160-4e76-ae20-32e1ea556f93)