/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { css } from 'lit';

const styles = css`
  .mdc-icon-button {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    width: 48px;
    height: 48px;
    padding: 12px;
  }
  .mdc-icon-button svg,
  .mdc-icon-button img {
    width: 24px;
    height: 24px;
  }
  .mdc-icon-button:disabled {
    color: #00000061;
    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
  }
  .mdc-icon-button:disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-icon-button .mdc-icon-button__touch {
    position: absolute;
    top: 50%;
    height: 48px;
    left: 50%;
    width: 48px;
    transform: translate(-50%, -50%);
  }
  .mdc-icon-button__icon {
    display: inline-block;
  }
  .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: none;
  }
  .mdc-icon-button--on .mdc-icon-button__icon {
    display: none;
  }
  .mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: inline-block;
  }
  .mdc-icon-button--touch {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @keyframes mdc-ripple-fg-radius-in {
    0% {
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
      transform: translate(var(--mdc-ripple-fg-translate-end, 0))
        scale(var(--mdc-ripple-fg-scale, 1));
    }
  }
  @keyframes mdc-ripple-fg-opacity-in {
    0% {
      animation-timing-function: linear;
      opacity: 0;
    }
    to {
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
  }
  @keyframes mdc-ripple-fg-opacity-out {
    0% {
      animation-timing-function: linear;
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
      opacity: 0;
    }
  }
  .mdc-icon-button {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-icon-button .mdc-icon-button__ripple::before,
  .mdc-icon-button .mdc-icon-button__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: '';
  }
  .mdc-icon-button .mdc-icon-button__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    z-index: var(--mdc-ripple-z-index, 1);
  }
  .mdc-icon-button .mdc-icon-button__ripple::after {
    z-index: 0;
    z-index: var(--mdc-ripple-z-index, 0);
  }
  .mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before {
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: center center;
  }
  .mdc-icon-button.mdc-ripple-upgraded--unbounded
    .mdc-icon-button__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-icon-button.mdc-ripple-upgraded--foreground-activation
    .mdc-icon-button__ripple::after {
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation
    .mdc-icon-button__ripple::after {
    animation: mdc-ripple-fg-opacity-out 150ms;
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-icon-button .mdc-icon-button__ripple::before,
  .mdc-icon-button .mdc-icon-button__ripple::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,
  .mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-icon-button .mdc-icon-button__ripple::before,
  .mdc-icon-button .mdc-icon-button__ripple::after {
    background-color: #000;
    background-color: var(--mdc-ripple-color, #000);
  }
  .mdc-icon-button:hover .mdc-icon-button__ripple::before,
  .mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before {
    opacity: 0.04;
    opacity: var(--mdc-ripple-hover-opacity, 0.04);
  }
  .mdc-icon-button.mdc-ripple-upgraded--background-focused
    .mdc-icon-button__ripple::before,
  .mdc-icon-button:not(.mdc-ripple-upgraded):focus
    .mdc-icon-button__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
    opacity: var(--mdc-ripple-focus-opacity, 0.12);
  }
  .mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-icon-button:not(.mdc-ripple-upgraded):active
    .mdc-icon-button__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
    opacity: var(--mdc-ripple-press-opacity, 0.12);
  }
  .mdc-icon-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);
  }
  .mdc-icon-button .mdc-icon-button__ripple {
    pointer-events: none;
    z-index: 1;
  }
`;

export default styles;
