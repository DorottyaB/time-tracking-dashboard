const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const workCurrent = document.getElementById('workCurrent');
const workPrevious = document.getElementById('workPrevious');
const playCurrent = document.getElementById('playCurrent');
const playPrevious = document.getElementById('playPrevious');
const studyCurrent = document.getElementById('studyCurrent');
const studyPrevious = document.getElementById('studyPrevious');
const exerciseCurrent = document.getElementById('exerciseCurrent');
const exercisePrevious = document.getElementById('exercisePrevious');
const socialCurrent = document.getElementById('socialCurrent');
const socialPrevious = document.getElementById('socialPrevious');
const selfCurrent = document.getElementById('selfCurrent');
const selfPrevious = document.getElementById('selfPrevious');

const getData = async period => {
  try {
    const res = await fetch('./data.json', { mode: 'cors' });
    const data = await res.json();

    if (period === 'daily') {
      for (let item of data) {
        switch (item.title) {
          case 'Work':
            workCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            workPrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
          case 'Play':
            playCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            playPrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
          case 'Study':
            studyCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            studyPrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
          case 'Exercise':
            exerciseCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            exercisePrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
          case 'Social':
            socialCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            socialPrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
          case 'Self':
            selfCurrent.innerHTML = `${item.timeframes.daily.current}hrs`;
            selfPrevious.innerHTML = `${item.timeframes.daily.previous}hrs`;
        }
      }
    } else if (period === 'weekly') {
      for (let item of data) {
        switch (item.title) {
          case 'Work':
            workCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            workPrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
          case 'Play':
            playCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            playPrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
          case 'Study':
            studyCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            studyPrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
          case 'Exercise':
            exerciseCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            exercisePrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
          case 'Social':
            socialCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            socialPrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
          case 'Self':
            selfCurrent.innerHTML = `${item.timeframes.weekly.current}hrs`;
            selfPrevious.innerHTML = `${item.timeframes.weekly.previous}hrs`;
        }
      }
    } else {
      for (let item of data) {
        switch (item.title) {
          case 'Work':
            workCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            workPrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
          case 'Play':
            playCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            playPrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
          case 'Study':
            studyCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            studyPrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
          case 'Exercise':
            exerciseCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            exercisePrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
          case 'Social':
            socialCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            socialPrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
          case 'Self':
            selfCurrent.innerHTML = `${item.timeframes.monthly.current}hrs`;
            selfPrevious.innerHTML = `${item.timeframes.monthly.previous}hrs`;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

function changeText(text) {
  document.querySelectorAll('.timeframe').forEach(el => {
    el.textContent = text;
  });
}

daily.addEventListener('click', () => {
  getData('daily');
  changeText('Yesterday');
  daily.setAttribute('id', 'active');
  weekly.setAttribute('id', '');
  monthly.setAttribute('id', '');
});

weekly.addEventListener('click', () => {
  getData('weekly');
  changeText('Last week');
  weekly.setAttribute('id', 'active');
  daily.setAttribute('id', '');
  monthly.setAttribute('id', '');
});

monthly.addEventListener('click', () => {
  getData('monthly');
  changeText('Last month');
  monthly.setAttribute('id', 'active');
  weekly.setAttribute('id', '');
  daily.setAttribute('id', '');
});
