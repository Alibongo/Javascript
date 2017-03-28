const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  // dataset is an object that contains all of the data attributes from a specific element
const suffix = this.dataset.sizing || '';
//update variable:
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
