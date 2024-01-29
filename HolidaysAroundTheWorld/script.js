const form = document.querySelector('form');
const APIkey = "WnbprCsK5fGgwcwUEJHe30mHUQIqrIEH";
form.addEventListener('submit',functionmain);

async function functionmain(e){
    e.preventDefault();
    const countryID = form.country.value;
    const yearID = form.year.value;
    const url = `https://calendarific.com/api/v2/holidays?&api_key=${APIkey}&country=${countryID}&year=${yearID}`;
    getholidays(url)
        .then((data) => {
            console.log({data});
        })

}

async function getholidays(url){
    const response = await fetch(url);
    const data = await response.json();
   
    return data;
}