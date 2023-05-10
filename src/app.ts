import {Invoice} from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interface/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{
e.preventDefault();

let doc: HasFormatter

if(type.value === 'invoice'){
    doc = new Invoice(toForm.value, details.value, amount.valueAsNumber)
}else{
    doc = new Payment(toForm.value, details.value, amount.valueAsNumber)
}

list.render(doc, type.value, 'end');
})


