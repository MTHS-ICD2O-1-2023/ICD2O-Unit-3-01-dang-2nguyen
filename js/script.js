// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateTheArea() {

  // input
  const abase = parseInt(document.getElementById('a-base').value)
  const bbase = parseInt(document.getElementById('b-base').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = [(abase + bbase)/2]*height
 

  // output
  document.getElementById('area').innerHTML = 'Area is : ' + area + 'mm²'
}