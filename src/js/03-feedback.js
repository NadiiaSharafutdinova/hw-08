import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-msg';

refs = {
    form: document.querySelector(".feedback-form"),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onTextareaInput, 1000));

function onTextareaInput(evt){
    const value = evt.currentTarget.value;
    console.log(value);
    localStorage.setItem(STORAGE_KEY, value);
};

function onFormSubmit(evt){
    evt.preventDefault();
    console.log("Sending form");
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populatedTextarea(){
const savedMessage = localStorage.getItem(STORAGE_KEY);
if(savedMessage){
    console.log(savedMessage);
    refs.message.value = savedMessage;
}
};
