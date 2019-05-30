import good from '../img/good.jpg';
import bad from '../img/bad.jpg';
import stress from '../img/stress.jpg';


const result = [ 
    {
        resultTitle: 'Какое либо психическое напряжение отсутствует.',
        resultDescription: 'Вашему здоровью ничто не угрожает. Но продолжайте следить за своим состоянием: остерегайтесь перегрузок, чаще отдыхайте, ведите здоровый образ жизни.',
        resultImage: good 
    },
    {
      resultTitle: 'Ваше нервно психическое состояние чрезмерно напряженное и экстенсивное.',
      resultDescription: 'Существует явная угроза для вашего здоровья. Необходимо обратиться за консультацией к специалисту',
      resultImage: bad 
  
    },
    {
        resultTitle: 'Вас нельзя назвать здоровым человеком.',
        resultDescription: 'У вас повышенное нервно психическое напряжение. Постарайтесь расслабляться. Следите за своим состоянием, не допускайте его ухудшения.',
        resultImage: stress 
    
    },
  ]
  
  export default result;