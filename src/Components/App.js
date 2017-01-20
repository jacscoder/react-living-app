import React from 'react';
import WelcomeComponent from './WelcomeComponent.jsx'
import CurrentCostOfLivingComponent from './CurrentCostOfLivingComponent.jsx'
import CityDropDownComponent from './CityDropDownComponent.jsx'
import NewCostOfLivingComponent from './NewCostOfLivingComponent.jsx'

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      step: 1,
      currentCostOfLiving: '',
      currencyType: 'USD',
      currentCity: '',
      newCity: '',
      newCitySlug: '',
      newCostOfLiving: 0,
      rentPercentChange: 0,
      groceriesPercentChange: 0,
      restaurantPercentChange: 0,
      purchasingPercentChange: 0
    };

    this.keyedCityOptions = {"Hamilton, Bermuda":{"index":"126.6","rent_index":"115.93","groceries_index":"124.87","restaurant_index":"140.26","purchasing_index":"115.83"},"New York, NY, United States":{"index":"100","rent_index":"100","groceries_index":"100","restaurant_index":"100","purchasing_index":"100"},"Honolulu, HI, United States":{"index":"83.12","rent_index":"67.29","groceries_index":"106.4","restaurant_index":"84.28","purchasing_index":"92.15"},"San Francisco, CA, United States":{"index":"109.23","rent_index":"126.27","groceries_index":"101.67","restaurant_index":"91.08","purchasing_index":"105.44"},"Washington, DC, United States":{"index":"86.04","rent_index":"78.01","groceries_index":"85.1","restaurant_index":"90.76","purchasing_index":"118.72"},"Anchorage, AK, United States":{"index":"69.79","rent_index":"45.48","groceries_index":"88.77","restaurant_index":"88.16","purchasing_index":"147.86"},"Oakland, CA, United States":{"index":"81.49","rent_index":"75.47","groceries_index":"91.85","restaurant_index":"87.98","purchasing_index":"112.26"},"Chicago, IL, United States":{"index":"71.84","rent_index":"57.14","groceries_index":"83.5","restaurant_index":"84.2","purchasing_index":"125.71"},"Santa Cruz, CA, United States":{"index":"75.02","rent_index":"64.74","groceries_index":"92.71","restaurant_index":"66.24","purchasing_index":"152.51"},"Seattle, WA, United States":{"index":"74.39","rent_index":"63.61","groceries_index":"83.86","restaurant_index":"77.12","purchasing_index":"139.5"},"Boston, MA, United States":{"index":"80.25","rent_index":"76.32","groceries_index":"82.13","restaurant_index":"86","purchasing_index":"133.3"},"Minneapolis, MN, United States":{"index":"63.54","rent_index":"41.97","groceries_index":"90.69","restaurant_index":"69.08","purchasing_index":"126.21"},"Philadelphia, PA, United States":{"index":"67.35","rent_index":"50.77","groceries_index":"82.59","restaurant_index":"77.36","purchasing_index":"108.62"},"Saint Petersburg, FL, United States":{"index":"61.7","rent_index":"39.04","groceries_index":"85.32","restaurant_index":"76.58","purchasing_index":"146.91"},"Fairfax, VA, United States":{"index":"70.02","rent_index":"56.89","groceries_index":"76.64","restaurant_index":"76.55","purchasing_index":"136.57"},"Miami, FL, United States":{"index":"71.25","rent_index":"59.64","groceries_index":"78.85","restaurant_index":"87.63","purchasing_index":"102.37"},"Portland, OR, United States":{"index":"67.17","rent_index":"51.86","groceries_index":"81.67","restaurant_index":"73.74","purchasing_index":"119.7"},"Lexington, KY, United States":{"index":"57.07","rent_index":"30.45","groceries_index":"83.02","restaurant_index":"67.61","purchasing_index":"113.61"},"Sacramento, CA, United States":{"index":"60.79","rent_index":"38.63","groceries_index":"80.46","restaurant_index":"73.85","purchasing_index":"129.2"},"Las Vegas, NV, United States":{"index":"56.95","rent_index":"31.33","groceries_index":"74.75","restaurant_index":"79.92","purchasing_index":"114.17"},"Irvine, CA, United States":{"index":"72.39","rent_index":"65","groceries_index":"83.37","restaurant_index":"66.87","purchasing_index":"147.56"},"New Orleans, LA, United States":{"index":"60.56","rent_index":"39.76","groceries_index":"78.38","restaurant_index":"78.3","purchasing_index":"93.78"},"Pittsburgh, PA, United States":{"index":"59.16","rent_index":"37.2","groceries_index":"77.91","restaurant_index":"71.62","purchasing_index":"145.07"},"San Diego, CA, United States":{"index":"70.04","rent_index":"60.99","groceries_index":"77.82","restaurant_index":"79.9","purchasing_index":"120.74"},"Los Angeles, CA, United States":{"index":"73.26","rent_index":"67.98","groceries_index":"74.89","restaurant_index":"79.75","purchasing_index":"114.85"},"Denver, CO, United States":{"index":"66.44","rent_index":"53.51","groceries_index":"73.92","restaurant_index":"74.99","purchasing_index":"125.13"},"Fresno, CA, United States":{"index":"57.13","rent_index":"33.76","groceries_index":"78.55","restaurant_index":"73.03","purchasing_index":"98.38"},"Cleveland, OH, United States":{"index":"55.45","rent_index":"30.23","groceries_index":"77.58","restaurant_index":"72.03","purchasing_index":"127.7"},"Melbourne, FL, United States":{"index":"55.23","rent_index":"29.98","groceries_index":"88.8","restaurant_index":"63.37","purchasing_index":"109.41"},"Baltimore, MD, United States":{"index":"64.51","rent_index":"50.03","groceries_index":"76.91","restaurant_index":"76.71","purchasing_index":"157.99"},"Calgary, Canada":{"index":"58.07","rent_index":"36.54","groceries_index":"75.78","restaurant_index":"76.37","purchasing_index":"134.29"},"Des Moines, IA, United States":{"index":"55.91","rent_index":"31.97","groceries_index":"85.83","restaurant_index":"63.99","purchasing_index":"100.61"},"Fort Lauderdale, FL, United States":{"index":"68.04","rent_index":"59.15","groceries_index":"73.43","restaurant_index":"71.63","purchasing_index":"107.96"},"Orlando, FL, United States":{"index":"58.41","rent_index":"38.97","groceries_index":"79.38","restaurant_index":"73.8","purchasing_index":"125.21"},"Greensboro, NC, United States":{"index":"52.61","rent_index":"26.78","groceries_index":"80.59","restaurant_index":"57.7","purchasing_index":"165.27"},"Edmonton, Canada":{"index":"54.66","rent_index":"31.37","groceries_index":"73.56","restaurant_index":"72.74","purchasing_index":"116.51"},"Fort Worth, TX, United States":{"index":"56.93","rent_index":"36.34","groceries_index":"77.28","restaurant_index":"60.55","purchasing_index":"170.85"},"Halifax, Canada":{"index":"52.69","rent_index":"28.17","groceries_index":"76.03","restaurant_index":"72.19","purchasing_index":"102.77"},"Detroit, MI, United States":{"index":"54.34","rent_index":"32.01","groceries_index":"73.71","restaurant_index":"62.58","purchasing_index":"156.92"},"Charlotte, NC, United States":{"index":"58.76","rent_index":"41.61","groceries_index":"75.69","restaurant_index":"68.45","purchasing_index":"142.69"},"Chattanooga, TN, United States":{"index":"51.52","rent_index":"26.18","groceries_index":"79.59","restaurant_index":"67.47","purchasing_index":"150.31"},"Saint Paul, MN, United States":{"index":"54.81","rent_index":"33.74","groceries_index":"71.74","restaurant_index":"66.61","purchasing_index":"102.59"},"Tacoma, WA, United States":{"index":"54.87","rent_index":"34.4","groceries_index":"65.59","restaurant_index":"70.56","purchasing_index":"137.04"},"Spokane, WA, United States":{"index":"51.34","rent_index":"27.09","groceries_index":"71.14","restaurant_index":"76.52","purchasing_index":"107.47"},"Louisville, KY, United States":{"index":"51.45","rent_index":"27.45","groceries_index":"82.21","restaurant_index":"58.94","purchasing_index":"129.19"},"Indianapolis, IN, United States":{"index":"52.65","rent_index":"30.22","groceries_index":"72.87","restaurant_index":"64.56","purchasing_index":"99.95"},"Atlanta, GA, United States":{"index":"57.73","rent_index":"41.14","groceries_index":"70.91","restaurant_index":"68.17","purchasing_index":"144.59"},"Milwaukee, WI, United States":{"index":"53.89","rent_index":"33.31","groceries_index":"70.99","restaurant_index":"74.64","purchasing_index":"125.77"},"Houston, TX, United States":{"index":"60.4","rent_index":"47.25","groceries_index":"68.59","restaurant_index":"77.03","purchasing_index":"148.98"},"Cincinnati, OH, United States":{"index":"53.35","rent_index":"32.28","groceries_index":"70.84","restaurant_index":"65.15","purchasing_index":"127.99"},"Vancouver, Canada":{"index":"59.96","rent_index":"46.55","groceries_index":"74.21","restaurant_index":"67.55","purchasing_index":"103.23"},"Jacksonville, FL, United States":{"index":"53.68","rent_index":"33.35","groceries_index":"72","restaurant_index":"73.33","purchasing_index":"118.03"},"Fayetteville, AR, United States":{"index":"47.48","rent_index":"20.15","groceries_index":"74.46","restaurant_index":"66.12","purchasing_index":"104.48"},"Fort Myers, FL, United States":{"index":"51.71","rent_index":"29.35","groceries_index":"73.13","restaurant_index":"66.55","purchasing_index":"98.69"},"Little Rock, AR, United States":{"index":"50.37","rent_index":"26.54","groceries_index":"76.94","restaurant_index":"62.47","purchasing_index":"127.68"},"Tampa, FL, United States":{"index":"56.13","rent_index":"38.89","groceries_index":"74.54","restaurant_index":"68.34","purchasing_index":"111.81"},"Windsor, Canada":{"index":"47.47","rent_index":"20.67","groceries_index":"61.95","restaurant_index":"62.15","purchasing_index":"126.11"},"London, Canada":{"index":"48.89","rent_index":"23.76","groceries_index":"71.1","restaurant_index":"64.33","purchasing_index":"119.53"},"Victoria, Canada":{"index":"52.91","rent_index":"32.56","groceries_index":"72.78","restaurant_index":"65.63","purchasing_index":"110.94"},"Barrie, Canada":{"index":"50.53","rent_index":"27.56","groceries_index":"67.39","restaurant_index":"63.24","purchasing_index":"130.57"},"Winnipeg, Canada":{"index":"50.2","rent_index":"26.96","groceries_index":"67.09","restaurant_index":"66.55","purchasing_index":"103.12"},"Memphis, TN, United States":{"index":"50.94","rent_index":"28.64","groceries_index":"72.87","restaurant_index":"64.73","purchasing_index":"112.79"},"Newark, NJ, United States":{"index":"54.06","rent_index":"35.4","groceries_index":"58.76","restaurant_index":"78.14","purchasing_index":"138.75"},"Columbus, OH, United States":{"index":"53.71","rent_index":"34.96","groceries_index":"69.53","restaurant_index":"62.72","purchasing_index":"129.3"},"Raleigh, NC, United States":{"index":"53.5","rent_index":"34.57","groceries_index":"71.29","restaurant_index":"70.28","purchasing_index":"158.28"},"Toronto, Canada":{"index":"56.31","rent_index":"40.63","groceries_index":"65.33","restaurant_index":"68.65","purchasing_index":"126.31"},"Nashville, TN, United States":{"index":"58.08","rent_index":"44.54","groceries_index":"68.07","restaurant_index":"71.6","purchasing_index":"151.73"},"Mississauga, Canada":{"index":"54","rent_index":"35.86","groceries_index":"61.25","restaurant_index":"64.57","purchasing_index":"97.42"},"Bakersfield, CA, United States":{"index":"49.52","rent_index":"26.45","groceries_index":"69.66","restaurant_index":"70.01","purchasing_index":"148.21"},"Saint Louis, MO, United States":{"index":"50.53","rent_index":"28.66","groceries_index":"69.25","restaurant_index":"63.97","purchasing_index":"154.22"},"Gainesville, FL, United States":{"index":"50.26","rent_index":"28.22","groceries_index":"67.14","restaurant_index":"61.76","purchasing_index":"101.54"},"Columbia, SC, United States":{"index":"51.42","rent_index":"31","groceries_index":"74.75","restaurant_index":"61.85","purchasing_index":"78.87"},"Phoenix, AZ, United States":{"index":"51.95","rent_index":"32.25","groceries_index":"64.77","restaurant_index":"69.2","purchasing_index":"171.5"},"Austin, TX, United States":{"index":"60.61","rent_index":"51.06","groceries_index":"65.56","restaurant_index":"69.29","purchasing_index":"131.98"},"Dallas, TX, United States":{"index":"56.82","rent_index":"43.02","groceries_index":"61.99","restaurant_index":"70.93","purchasing_index":"162.9"},"Greenville, SC, United States":{"index":"52.56","rent_index":"34.03","groceries_index":"73.64","restaurant_index":"63.02","purchasing_index":"153.5"},"Ottawa, Canada":{"index":"51.02","rent_index":"30.95","groceries_index":"63.33","restaurant_index":"73.8","purchasing_index":"127.28"},"Pensacola, FL, United States":{"index":"50.2","rent_index":"29.28","groceries_index":"70.58","restaurant_index":"62.99","purchasing_index":"123.12"},"Sioux Falls, SD, United States":{"index":"49.35","rent_index":"27.77","groceries_index":"72.46","restaurant_index":"55.51","purchasing_index":"93.65"},"San Juan, Puerto Rico":{"index":"48.34","rent_index":"25.61","groceries_index":"62.61","restaurant_index":"66.78","purchasing_index":"88.64"},"Quebec City, Canada":{"index":"45.51","rent_index":"19.57","groceries_index":"65.9","restaurant_index":"64.77","purchasing_index":"124.02"},"Ann Arbor, MI, United States":{"index":"55.75","rent_index":"41.86","groceries_index":"62.27","restaurant_index":"68.57","purchasing_index":"160.06"},"Fremont, CA, United States":{"index":"68.58","rent_index":"69.54","groceries_index":"56.17","restaurant_index":"72.05","purchasing_index":"179.89"},"Guelph, Canada":{"index":"49.16","rent_index":"28.28","groceries_index":"63.64","restaurant_index":"63.2","purchasing_index":"100.53"},"Tulsa, OK, United States":{"index":"50.27","rent_index":"30.68","groceries_index":"70.81","restaurant_index":"60.19","purchasing_index":"139.93"},"Salem, OR, United States":{"index":"49.8","rent_index":"29.69","groceries_index":"66.33","restaurant_index":"65.54","purchasing_index":"107.86"},"Madison, WI, United States":{"index":"53.64","rent_index":"37.92","groceries_index":"66.15","restaurant_index":"62.91","purchasing_index":"143.03"},"Montreal, Canada":{"index":"47.84","rent_index":"25.66","groceries_index":"66.07","restaurant_index":"65.92","purchasing_index":"116.95"},"Kansas City, MO, United States":{"index":"50.04","rent_index":"30.36","groceries_index":"64.4","restaurant_index":"69.08","purchasing_index":"166.53"},"Rochester, NY, United States":{"index":"49.87","rent_index":"31.03","groceries_index":"65.05","restaurant_index":"72.02","purchasing_index":"138.1"},"Salt Lake City, UT, United States":{"index":"50.91","rent_index":"33.41","groceries_index":"65.02","restaurant_index":"67.27","purchasing_index":"158.47"},"Omaha, NE, United States":{"index":"49.39","rent_index":"31.5","groceries_index":"64.43","restaurant_index":"58.18","purchasing_index":"137.53"},"Albuquerque, NM, United States":{"index":"45.96","rent_index":"25.1","groceries_index":"60.4","restaurant_index":"68.08","purchasing_index":"146.79"},"Mobile, AL, United States":{"index":"45.24","rent_index":"23.74","groceries_index":"63.98","restaurant_index":"62.77","purchasing_index":"152.88"},"Tucson, AZ, United States":{"index":"44.69","rent_index":"23.01","groceries_index":"64.59","restaurant_index":"61.41","purchasing_index":"170.11"},"Oklahoma City, OK, United States":{"index":"47.47","rent_index":"29.35","groceries_index":"66.28","restaurant_index":"59.37","purchasing_index":"137.88"},"Kitchener, Canada":{"index":"44.88","rent_index":"25.59","groceries_index":"54.08","restaurant_index":"66.92","purchasing_index":"145.89"},"San Antonio, TX, United States":{"index":"48.73","rent_index":"34.73","groceries_index":"59.33","restaurant_index":"56.56","purchasing_index":"143.87"},"Panama City, Panama":{"index":"49.9","rent_index":"38.27","groceries_index":"59.48","restaurant_index":"57.21","purchasing_index":"37.35"},"San Jose, Costa Rica":{"index":"41.67","rent_index":"21.2","groceries_index":"58.24","restaurant_index":"48.48","purchasing_index":"47.79"},"Buenos Aires, Argentina":{"index":"39.37","rent_index":"17.16","groceries_index":"46.59","restaurant_index":"59.34","purchasing_index":"59.48"},"Hamilton, Canada":{"index":"42.09","rent_index":"23.18","groceries_index":"55.44","restaurant_index":"56.74","purchasing_index":"149.05"},"Athens, GA, United States":{"index":"41.94","rent_index":"23.32","groceries_index":"52.28","restaurant_index":"63.49","purchasing_index":"149.21"},"Montevideo, Uruguay":{"index":"38.4","rent_index":"16.88","groceries_index":"46.3","restaurant_index":"52.01","purchasing_index":"42.08"},"Rio De Janeiro, Brazil":{"index":"40.77","rent_index":"23.8","groceries_index":"38.75","restaurant_index":"49.68","purchasing_index":"46.09"},"Sao Paulo, Brazil":{"index":"38.8","rent_index":"22.21","groceries_index":"39.39","restaurant_index":"48.26","purchasing_index":"43.75"},"Campinas, Brazil":{"index":"35.82","rent_index":"16.53","groceries_index":"39.44","restaurant_index":"41.74","purchasing_index":"59.51"},"Santo Domingo, Dominican Republic":{"index":"34.53","rent_index":"14.61","groceries_index":"44.5","restaurant_index":"41.95","purchasing_index":"24.64"},"Brasilia, Brazil":{"index":"35.28","rent_index":"17.5","groceries_index":"39.06","restaurant_index":"45.34","purchasing_index":"60.67"},"Santiago, Chile":{"index":"35.52","rent_index":"18.29","groceries_index":"43.58","restaurant_index":"46.84","purchasing_index":"64.89"},"Porto Alegre, Brazil":{"index":"33.05","rent_index":"13.61","groceries_index":"39.34","restaurant_index":"40.46","purchasing_index":"53.66"},"Guayaquil, Ecuador":{"index":"32.25","rent_index":"13.26","groceries_index":"43.41","restaurant_index":"37.46","purchasing_index":"41.58"},"Cuenca, Ecuador":{"index":"32.19","rent_index":"13.34","groceries_index":"53.14","restaurant_index":"27.41","purchasing_index":"37.76"},"Florianopolis, Brazil":{"index":"32.07","rent_index":"14.34","groceries_index":"36.69","restaurant_index":"40.46","purchasing_index":"53.11"},"Recife, Brazil":{"index":"31.93","rent_index":"14.05","groceries_index":"41.52","restaurant_index":"33.4","purchasing_index":"41.55"},"Belo Horizonte, Brazil":{"index":"30.83","rent_index":"13.13","groceries_index":"36.58","restaurant_index":"34.78","purchasing_index":"45.56"},"Curitiba, Brazil":{"index":"30.36","rent_index":"12.97","groceries_index":"33.69","restaurant_index":"36.63","purchasing_index":"50.86"},"Natal, Brazil":{"index":"29.66","rent_index":"11.82","groceries_index":"34.19","restaurant_index":"32.75","purchasing_index":"40.96"},"San Salvador, El Salvador":{"index":"28.39","rent_index":"9.68","groceries_index":"39.83","restaurant_index":"34","purchasing_index":"32.64"},"Quito, Ecuador":{"index":"31.02","rent_index":"15.55","groceries_index":"40.85","restaurant_index":"32.96","purchasing_index":"43.09"},"Fortaleza, Brazil":{"index":"28.56","rent_index":"10.81","groceries_index":"35.51","restaurant_index":"29.41","purchasing_index":"38.1"},"Concepcion, Chile":{"index":"28.6","rent_index":"11.72","groceries_index":"37.21","restaurant_index":"28.06","purchasing_index":"83.74"},"Guatemala City, Guatemala":{"index":"29.54","rent_index":"14.59","groceries_index":"38.52","restaurant_index":"34.16","purchasing_index":"54.81"},"Lima, Peru":{"index":"31.01","rent_index":"18.91","groceries_index":"37.08","restaurant_index":"29.15","purchasing_index":"54.58"},"Mexico City, Mexico":{"index":"28.4","rent_index":"17.85","groceries_index":"33.72","restaurant_index":"34.52","purchasing_index":"60.91"},"Bogota, Colombia":{"index":"25.79","rent_index":"14.51","groceries_index":"29.7","restaurant_index":"26.17","purchasing_index":"40.27"},"Monterrey, Mexico":{"index":"24.67","rent_index":"12.13","groceries_index":"33.07","restaurant_index":"31.42","purchasing_index":"133.54"},"Queretaro, Mexico":{"index":"23.58","rent_index":"10.05","groceries_index":"34.25","restaurant_index":"27.02","purchasing_index":"84.67"},"Tijuana, Mexico":{"index":"22.16","rent_index":"8.46","groceries_index":"32.38","restaurant_index":"31.04","purchasing_index":"60.04"},"Medellin, Colombia":{"index":"21.01","rent_index":"8.22","groceries_index":"28.34","restaurant_index":"22.37","purchasing_index":"44.22"},"Guadalajara, Mexico":{"index":"20.25","rent_index":"8.19","groceries_index":"28.86","restaurant_index":"27.14","purchasing_index":"52.85"},"Cali, Colombia":{"index":"18.88","rent_index":"7.45","groceries_index":"23.89","restaurant_index":"22.54","purchasing_index":"37.86"}};

    this.handleCurrentCostOfLivingInput = this.handleCurrentCostOfLivingInput.bind(this);
    this.handleCurrencyType = this.handleCurrencyType.bind(this);
    this.handleCurrentCity = this.handleCurrentCity.bind(this);
    this.handleNewCity = this.handleNewCity.bind(this);
    this.calculateNewCostOfLivingAndNextStep = this.calculateNewCostOfLivingAndNextStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.resetToFirstStep = this.resetToFirstStep.bind(this);
  }

  handleCurrentCostOfLivingInput (e) {
    this.setState({
      currentCostOfLiving: e.target.value
    });
  }

  handleCurrencyType (e) {
    this.setState({
      currencyType: e.target.value
    })
  }

  handleCurrentCity (e) {
    let currencyType;

    // if (e.target.value.indexOf("United States") >= 0) {
    //   currencyType = 'USD';
    // } else if (e.target.value.indexOf("Canada") >= 0) {
    //   currencyType = 'CAD';
    // } else if (e.target.value.indexOf("Bermuda") >= 0) {
    //   currencyType = 'BMD';
    // } else if (e.target.value.indexOf("Panama") >= 0) {
    //   currencyType = 'PAB';
    // } else if (e.target.value.indexOf("Costa Rica") >= 0) {
    //   currencyType = 'CRC';
    // } else if (e.target.value.indexOf("Argentina") >= 0) {
    //   currencyType = 'ARS';
    // } else if (e.target.value.indexOf("Dominican Republic") >= 0) {
    //   currencyType = 'DOP';
    // } else if (e.target.value.indexOf("Chile") >= 0) {
    //   currencyType = 'CLP';
    // } else if (e.target.value.indexOf("Guatemala") >= 0) {
    //   currencyType = 'GTQ';
    // } else if (e.target.value.indexOf("Peru") >= 0) {
    //   currencyType = 'PEN';
    // } else if (e.target.value.indexOf("Mexico") >= 0) {
    //   currencyType = 'MXN';
    // } else if (e.target.value.indexOf("Colombia") >= 0) {
    //   currencyType = 'COP';
    // }

    // this.setState({
    //   currentCity: e.target.value,
    //   currencyType: currencyType
    // });

    this.setState({
      currentCity: e,
      currencyType: currencyType
    });
  }

  handleNewCity (e) {
    // this.setState({
    //   newCity: e.target.value
    // });

    this.setState({
      newCity: e
    });
  }

  calculateNewCostOfLivingAndNextStep () {
    const currentCostOfLiving = Number(this.state.currentCostOfLiving);
    const currentCity = this.state.currentCity;
    const newCity = this.state.newCity;
    
    let newCostOfLiving;
    let rentPercentChange;
    let groceriesPercentChange;
    let restaurantPercentChange;
    let purchasingPercentChange;

    const dataSet = require('../data/cost_of_living_indices.json');

    const currentCityIndex = dataSet[currentCity].index;
    const newCityIndex = dataSet[newCity].index;
    const currentCityRentIndex = dataSet[currentCity].rent_index;
    const newCityRentIndex = dataSet[newCity].rent_index;
    const newCitySlug = dataSet[newCity].slug;
    const currentCityGroceriesIndex = dataSet[currentCity].groceries_index;
    const newCityGroceriesIndex = dataSet[newCity].groceries_index;
    const currentCityRestaurantIndex = dataSet[currentCity].restaurant_index;
    const newCityRestaurantIndex = dataSet[newCity].restaurant_index;
    const currentCityPurchasingIndex = dataSet[currentCity].purchasing_index;
    const newCityPurchasingIndex = dataSet[newCity].purchasing_index;

    if (newCityIndex !== currentCityIndex) {
      let fractionalChange = ((newCityIndex - currentCityIndex)/currentCityIndex);
      newCostOfLiving = (currentCostOfLiving + (currentCostOfLiving * fractionalChange));
    } else {
      newCostOfLiving = currentCostOfLiving;
    }

    if (newCityRentIndex !== currentCityRentIndex) {
      rentPercentChange = Math.round(((newCityRentIndex - currentCityRentIndex)/currentCityRentIndex) * 100);
    }

    if (newCityGroceriesIndex !== currentCityGroceriesIndex) {
      groceriesPercentChange = Math.round(((newCityGroceriesIndex - currentCityGroceriesIndex)/currentCityGroceriesIndex) * 100);
    }

    if (newCityRestaurantIndex !== currentCityRestaurantIndex) {
      restaurantPercentChange = Math.round(((newCityRestaurantIndex - currentCityRestaurantIndex)/currentCityRestaurantIndex) * 100);
    }

    if (newCityPurchasingIndex !== currentCityPurchasingIndex) {
      purchasingPercentChange = Math.round(((newCityPurchasingIndex - currentCityPurchasingIndex)/currentCityPurchasingIndex) * 100);
    }

    this.setState({
      newCitySlug: newCitySlug,
      newCostOfLiving: (Math.round(newCostOfLiving/100)*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      rentPercentChange: rentPercentChange,
      groceriesPercentChange: groceriesPercentChange,
      restaurantPercentChange: restaurantPercentChange,
      purchasingPercentChange: purchasingPercentChange
    });

    this.nextStep();
  }

  nextStep () {
    this.setState({
      step: this.state.step + 1 
    });
  }

  previousStep () {
    this.setState({
      step: this.state.step - 1
    });
  }

  resetToFirstStep () {
    this.setState({
      step: 1,
      currentCostOfLiving: '',
      currencyType: '$',
      currentCity: '',
      newCity: '',
      newCitySlug: '',
      newCostOfLiving: 0,
      rentPercentChange: 0,
      groceriesPercentChange: 0,
      restaurantPercentChange: 0,
      purchasingPercentChange: 0
    })
  }

  render () {
    switch (this.state.step) {
      case 1:
        return <WelcomeComponent nextStep={this.nextStep}/>
      case 2:
        return <CityDropDownComponent id='cityDropdown'
                      keyedOptions={this.keyedCityOptions}
                      value={this.state.currentCity} 
                      valueField='index' labelField='city' 
                      onChange={this.handleCurrentCity}
                      nextStep={this.nextStep}
                      previousStep={this.previousStep}
                      stepNumber={this.state.step}
                      resetToFirstStep={this.resetToFirstStep}/>
      case 3:
        return <CurrentCostOfLivingComponent value={this.state.currentCostOfLiving} 
                          currencyValue={this.state.currencyType}
                          onChange={this.handleCurrentCostOfLivingInput} 
                          onChangeOfCurrencyType={this.handleCurrencyType}
                          nextStep={this.nextStep}
                          previousStep={this.previousStep}
                          resetToFirstStep={this.resetToFirstStep}/>
      case 4:
        return <CityDropDownComponent id='cityDropdown'
                      keyedOptions={this.keyedCityOptions}
                      value={this.state.newCity} 
                      valueField='index' labelField='city' 
                      onChange={this.handleNewCity}
                      nextStep={this.calculateNewCostOfLivingAndNextStep}
                      previousStep={this.previousStep}
                      stepNumber={this.state.step}
                      resetToFirstStep={this.resetToFirstStep}/>
      case 5:
        return <NewCostOfLivingComponent value={this.state.newCostOfLiving}
                         currentCostOfLiving={this.state.currentCostOfLiving}
                         newCity={this.state.newCity}
                         newCitySlug={this.state.newCitySlug}
                         currencyType={this.state.currencyType}
                         rentPercentChange={this.state.rentPercentChange}
                         groceriesPercentChange={this.state.groceriesPercentChange}
                         restaurantPercentChange={this.state.restaurantPercentChange}
                         purchasingPercentChange={this.state.purchasingPercentChange}
                         resetToFirstStep={this.resetToFirstStep}/>
    }
  }
}

export default App;
