'use strict';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const emailAreaEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

const feedbackFormState = {};

function fillForm() {
  const localStorageFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorageFormData === null) {
    return;
  }

  const keys = Object.keys(localStorageFormData);

  for (const key of keys) {
    feedbackFormEl.elements[key].value = localStorageFormData[key];
  }
}

fillForm();

function storeData(event) {
  feedbackFormState.email = emailAreaEl.value;
  feedbackFormState.message = textAreaEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

feedbackFormEl.addEventListener('input', throttle(storeData, 500, { leading: false }));

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
});
