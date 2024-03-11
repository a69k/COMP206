// Question One
function removeRepetitions() {
  const inputArr = document.getElementById('q1Input').value.split(' ');
  const q1Res = document.getElementById('q1Res');
  const numberCounts = {};
  const uniqueNumbers = [];

  for (const num of inputArr) { 
    //  this is absolutely retarded logic to make an array that basically uses the numbers as
    //   positions then adds a value to the position everytime it goes to this position then filters..
    if (numberCounts[num] === undefined) {
      numberCounts[num] = 0;
      uniqueNumbers.push(num);
    }
    numberCounts[num]++;
  }

  const resultArray = uniqueNumbers.filter(num => numberCounts[num] < 3);
  q1Res.innerHTML = resultArray.join(' ');
}

// Question Two (2 ez)
const paragraph = document.getElementById('testP');
const emWords = paragraph.getElementsByTagName('em');

paragraph.addEventListener("mouseover", ()=>{
for (let i = 0; i < emWords.length; i++) {
  emWords[i].style.color = 'plum';
  emWords[i].style.border = '2px dashed magenta';
}
})
paragraph.addEventListener("mouseout", ()=>{
for (let i = 0; i < emWords.length; i++) {
  emWords[i].style.color = '';
  emWords[i].style.border = '';
}
})

// Question Three
document.addEventListener('DOMContentLoaded', () => { 
  const htmlCB = document.getElementById('htmlCB');
  const cssCB = document.getElementById('cssCB');
  const jsCB = document.getElementById('jsCB');
  const phpCB = document.getElementById('phpCB');
  const fileList = document.getElementById('fileList');
  const fileListArr = Array.from(fileList.options);

  const filterFiles = () => {
    const selectedFileTypes = [];
    
    if (htmlCB.checked) selectedFileTypes.push('html');
    if (cssCB.checked) selectedFileTypes.push('css');
    if (jsCB.checked) selectedFileTypes.push('js');
    if (phpCB.checked) selectedFileTypes.push('php');

    fileListArr.forEach(option => {
      option.style.display = 'none'
      const optionFileType = option.value.split('.').pop(); // to return the filetype of each of the file list select elements
      console.log(optionFileType) // this was testing 
      if (selectedFileTypes.length === 0 || selectedFileTypes.includes(optionFileType)) { // had to include if no selected condition (the first 1) because they'd all be hidden otherwise (if none selected)
        option.style.display = 'block';
      }
    }); 
  };
  // IMPORTANT NOTE: to do the opposite (what the sheet really wants, you can swap the none and block on lines 57 and 60 respectively)

  htmlCB.addEventListener('change', filterFiles);
  cssCB.addEventListener('change', filterFiles);
  jsCB.addEventListener('change', filterFiles);
  phpCB.addEventListener('change', filterFiles);
});

// Question Four 
function genSubString() {
  const inputStr = document.getElementById('subStr').value;
  const qfRes = document.getElementById('qfRes');
  const substrings = [];
  let currSubStr;

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];

    if (char !== ' ') { // this is because the old method i tried gave me hel lo wor ld it counted the space between the words.
      currSubStr += char;
      if (currSubStr.length === 3) {
        substrings.push(currSubStr);
        currSubStr = ''; //clearing it 
      }
    }
  }

  if (currSubStr.length > 0) {
    substrings.push(currSubStr);
  }

  qfRes.innerHTML = substrings.join(', '); 
}