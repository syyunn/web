import React from 'react';
import { ListOverflow } from './ListOverflow'
import { SELECT_DS, SELECT_ARTICLE } from "../../redux/actionTypes";

export default {
    title: 'Menu/ListOverflow',
};

export const ListOverflowDS = () => ListOverflow({
    type: SELECT_DS,
    prefix: 'ds', data: [2, 18, 22, 31, 34, 46, 56, 58, 60, 62, 67, 68, 69, 75, 76,
        87, 90, 98, 103, 108, 121, 122, 135, 136, 139, 141, 146, 152,
        155, 161, 162, 165, 166, 174, 175, 177, 184, 202, 207, 212,
        217, 219, 221, 231, 234, 238, 244, 245, 246, 248, 257, 264,
        265, 266, 267, 268, 269, 276, 282, 283, 286, 290, 294, 295,
        296, 301, 302, 308, 312, 315, 316, 320, 321, 322, 332, 336,
        339, 343, 344, 345, 350, 353, 360, 363, 366, 371, 379, 381,
        384, 392, 394, 396, 397, 399, 400, 406, 412, 414, 415, 422,
        425, 427, 429, 430, 431, 435, 436, 437, 440, 442, 447, 449,
        453, 454, 456, 457, 461, 464, 468, 471, 472, 473, 475, 476,
        477, 479, 480, 482, 483, 484, 485, 486, 488, 490, 492, 493,
        495, 499, 504, 505, 513, 518, 523], bb: true, hoverColor: "lightest-blue"
})

export const ListOverflowDSLightYellow = () => ListOverflow({
    type: SELECT_DS,
    prefix: 'ds', data: [2, 18, 22, 31, 34, 46, 56, 58, 60, 62, 67, 68, 69, 75, 76,
        87, 90, 98, 103, 108, 121, 122, 135, 136, 139, 141, 146, 152,
        155, 161, 162, 165, 166, 174, 175, 177, 184, 202, 207, 212,
        217, 219, 221, 231, 234, 238, 244, 245, 246, 248, 257, 264,
        265, 266, 267, 268, 269, 276, 282, 283, 286, 290, 294, 295,
        296, 301, 302, 308, 312, 315, 316, 320, 321, 322, 332, 336,
        339, 343, 344, 345, 350, 353, 360, 363, 366, 371, 379, 381,
        384, 392, 394, 396, 397, 399, 400, 406, 412, 414, 415, 422,
        425, 427, 429, 430, 431, 435, 436, 437, 440, 442, 447, 449,
        453, 454, 456, 457, 461, 464, 468, 471, 472, 473, 475, 476,
        477, 479, 480, 482, 483, 484, 485, 486, 488, 490, 492, 493,
        495, 499, 504, 505, 513, 518, 523], bb: true, hoverColor: "light-yellow"
})

export const ListOverflowDSNoBB = () => ListOverflow({
    type: SELECT_DS,
    prefix: 'ds', data: [2, 18, 22, 31, 34, 46, 56, 58, 60, 62, 67, 68, 69, 75, 76,
        87, 90, 98, 103, 108, 121, 122, 135, 136, 139, 141, 146, 152,
        155, 161, 162, 165, 166, 174, 175, 177, 184, 202, 207, 212,
        217, 219, 221, 231, 234, 238, 244, 245, 246, 248, 257, 264,
        265, 266, 267, 268, 269, 276, 282, 283, 286, 290, 294, 295,
        296, 301, 302, 308, 312, 315, 316, 320, 321, 322, 332, 336,
        339, 343, 344, 345, 350, 353, 360, 363, 366, 371, 379, 381,
        384, 392, 394, 396, 397, 399, 400, 406, 412, 414, 415, 422,
        425, 427, 429, 430, 431, 435, 436, 437, 440, 442, 447, 449,
        453, 454, 456, 457, 461, 464, 468, 471, 472, 473, 475, 476,
        477, 479, 480, 482, 483, 484, 485, 486, 488, 490, 492, 493,
        495, 499, 504, 505, 513, 518, 523], bb: false, hoverColor: "light-pink"
})

export const ListOverflowArticle = () => ListOverflow({
    type: SELECT_ARTICLE,
    prefix: '', data: ['Article I', 'Article I:1', 'Article II', 'Article II:1',
        'Article II:1(a)', 'Article II:1(b)', 'Article II:2',
        'Article II:3', 'Article III', 'Article III:1',
        'Article III:2', 'Article III:4', 'Article III:5',
        'Article III:7', 'Article IV', 'Article IX',
        'Article IX:2', 'Article V', 'Article V:1',
        'Article V:2', 'Article V:3', 'Article V:3(a)',
        'Article V:4', 'Article V:5', 'Article V:6',
        'Article V:7', 'Article VI', 'Article VI:1',
        'Article VI:2', 'Article VI:2(a)', 'Article VI:2(b)',
        'Article VI:3', 'Article VI:5(a)', 'Article VI:6',
        'Article VII', 'Article VII:1', 'Article VII:2',
        'Article VII:5', 'Article VIII', 'Article VIII:1',
        'Article VIII:3', 'Article VIII:4', 'Article X',
        'Article X:1', 'Article X:2', 'Article X:3',
        'Article X:3(a)', 'Article XI',
        'Article XI:1', 'Article XIII',
        'Article XIII:1', 'Article XIII:2',
        'Article XIII:3(b)', 'Article XIX',
        'Article XIX:1', 'Article XIX:2',
        'Article XIX:3', 'Article XV',
        'Article XVI', 'Article XVI:1',
        'Article XVI:4', 'Article XVII',
        'Article XVII:1', 'Article XVII:1(c)',
        'Article XVIII', 'Article XVIII:10',
        'Article XVIII:11', 'Article XX',
        'Article XXI', 'Article XXII',
        'Article XXII:1', 'Article XXIII',
        'Article XXIII:1', 'Article XXIII:1(a)',
        'Article XXIII:1(b)', 'Article XXIV',
        'Article XXIV:12', 'Article XXIV:5(b)',
        'Article XXIV:6', 'Article XXVIII'], bb: true, hoverColor: "light-green"
})
