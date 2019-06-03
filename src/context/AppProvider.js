import React, { Component } from "react";
import AppContext from "./AppContext";

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          key: "berlin",
          name: "Berlin",
          dropname: "Berlin, Germany",
          lat: "52.520008",
          lng: "13.404954"
        },
        {
          key: "anchorage",
          name: "Anchorage",
          dropname: "Anchorage, USA",
          lat: "61.216667",
          lng: "-149.883333"
        },
        {
          key: "bamako",
          name: "Bamako",
          dropname: "Bamako, Mali",
          lat: "12.645833",
          lng: "-7.992222"
        },
        {
          key: "bangkok",
          name: "Bangkok",
          dropname: "Bangkok, Thailand",
          lat: "13.75",
          lng: "100.516667"
        },
        {
          key: "beijing",
          name: "Beijing",
          dropname: "Beijing, China",
          lat: "39.933333",
          lng: "116.383333"
        },
        {
          key: "bremen",
          name: "Bremen",
          dropname: "Bremen, Germany",
          lat: "53.075878",
          lng: "8.807311"
        },
        {
          key: "budapest",
          name: "Budapest",
          dropname: "Budapest, Hungary",
          lat: "47.5",
          lng: "19.05"
        },
        {
          key: "buenosaires",
          name: "Buenos Aires",
          dropname: "Buenos Aires, Argentina",
          lat: "-34.599722",
          lng: "-58.381944"
        },
        {
          key: "cairo",
          name: "Cairo",
          dropname: "Cairo, Egypt",
          lat: "30.056111",
          lng: "31.239444"
        },
        {
          key: "capetown",
          name: "Cape Town",
          dropname: "Cape Town, South Africa",
          lat: "-33.922667",
          lng: "18.416689"
        },
        {
          key: "caracas",
          name: "Caracas",
          dropname: "Caracas, Venezuela",
          lat: "10.5047",
          lng: "-66.9145"
        },
        {
          key: "chicago",
          name: "Chicago",
          dropname: "Chicago, USA",
          lat: "41.881944",
          lng: "-87.627778"
        },
        {
          key: "cologne",
          name: "Cologne",
          dropname: "Cologne, Germany",
          lat: "50.938056",
          lng: "6.956944"
        },
        {
          key: "damascus",
          name: "Damascus",
          dropname: "Damascus, Syria",
          lat: "33.509722",
          lng: "36.309167"
        },
        {
          key: "frankfurt",
          name: "Frankfurt",
          dropname: "Frankfurt, Germany",
          lat: "50.116667",
          lng: "8.683333"
        },
        {
          key: "hamburg",
          name: "Hamburg",
          dropname: "Hamburg, Germany",
          lat: "53.550556",
          lng: "9.993333"
        },
        {
          key: "hanover",
          name: "Hanover",
          dropname: "Hanover, Germany",
          lat: "52.374444",
          lng: "9.738611"
        },
        {
          key: "havana",
          name: "Havana",
          dropname: "Havana, Cuba",
          lat: "23.1225",
          lng: "-82.386389"
        },
        {
          key: "houston",
          name: "Houston",
          dropname: "Houston, USA",
          lat: "29.762778",
          lng: "-95.383056"
        },
        {
          key: "istanbul",
          name: "Istanbul",
          dropname: "Istanbul, Turkey",
          lat: "41.01",
          lng: "28.960278"
        },
        {
          key: "kathmandu",
          name: "Kathmandu",
          dropname: "Kathmandu, Nepal",
          lat: "27.716667",
          lng: "85.316667"
        },
        {
          key: "kiel",
          name: "Kiel",
          dropname: "Kiel, Germany",
          lat: "54.32321",
          lng: "10.14019"
        },
        {
          key: "kingston",
          name: "Kingston",
          dropname: "Kingston, Jamaica",
          lat: "18.01283",
          lng: "-76.8007"
        },
        {
          key: "kinshasa",
          name: "Kinshasa",
          dropname: "Kinshasa, DR of Congo",
          lat: "-4.331667",
          lng: "15.313889"
        },
        {
          key: "lapaz",
          name: "La Paz",
          dropname: "La Paz, Bolivia",
          lat: "-16.494167",
          lng: "-68.1475"
        },
        {
          key: "leipzig",
          name: "Leipzig",
          dropname: "Leipzig, Germany",
          lat: "51.340333",
          lng: "12.37475"
        },
        {
          key: "london",
          name: "London",
          dropname: "London, UK",
          lat: "51.50939",
          lng: "-0.11832"
        },
        {
          key: "losangeles",
          name: "Los Angeles",
          dropname: "Los Angeles, USA",
          lat: "34.052222",
          lng: "-118.243611"
        },
        {
          key: "madrid",
          name: "Madrid",
          dropname: "Madrid, Spain",
          lat: "40.4125",
          lng: "-3.703889"
        },
        {
          key: "magdeburg",
          name: "Magdeburg",
          dropname: "Magdeburg, Germany",
          lat: "52.133333",
          lng: "11.616667"
        },
        {
          key: "manaus",
          name: "Manaus",
          dropname: "Manaus, Brazil",
          lat: "-3.1",
          lng: "-60.016667"
        },
        {
          key: "manila",
          name: "Manila",
          dropname: "Manila, Philippines",
          lat: "14.583333",
          lng: "121"
        },
        {
          key: "mcmurdo",
          name: "McMurdo station",
          dropname: "McMurdo station, Antarctica",
          lat: "-77.846323",
          lng: "166.668235"
        },
        {
          key: "mexico",
          name: "Mexico City",
          dropname: "Mexico City, Mexico",
          lat: "19.419444",
          lng: "-99.145556"
        },
        {
          key: "moscow",
          name: "Moscow",
          dropname: "Moscow, Russia",
          lat: "55.75",
          lng: "37.616667"
        },
        {
          key: "mumbai",
          name: "Mumbai",
          dropname: "Mumbai, India",
          lat: "18.966667",
          lng: "72.833333"
        },
        {
          key: "munich",
          name: "Munich",
          dropname: "Munich, Germany",
          lat: "48.137222",
          lng: "11.575556"
        },
        {
          key: "newyork",
          name: "New York",
          dropname: "New York City, USA",
          lat: "40.712778",
          lng: "-74.005833"
        },
        {
          key: "oymyakon",
          name: "Oymyakon",
          dropname: "Oymyakon, Russia",
          lat: "63.462778",
          lng: "142.786944"
        },
        {
          key: "paris",
          name: "Paris",
          dropname: "Paris, France",
          lat: "48.856667",
          lng: "2.351667"
        },
        {
          key: "philadelphia",
          name: "Philadelphia",
          dropname: "Philadelphia, USA",
          lat: "39.952222",
          lng: "-75.163889"
        },
        {
          key: "phoenix",
          name: "Phoenix",
          dropname: "Phoenix, USA",
          lat: "33.448083",
          lng: "-112.073083"
        },
        {
          key: "reykjavik",
          name: "Reykjavik",
          dropname: "Reykjavik, Iceland",
          lat: "64.15",
          lng: "-21.933333"
        },
        {
          key: "rio",
          name: "Rio de Janeiro",
          dropname: "Rio de Janeiro, Brazil",
          lat: "-22.908333",
          lng: "-43.196389"
        },
        {
          key: "riyadh",
          name: "Riyadh",
          dropname: "Riyadh, Saudi Arabia",
          lat: "24.65",
          lng: "46.71"
        },
        {
          key: "rome",
          name: "Rome",
          dropname: "Rome, Italy",
          lat: "41.883333",
          lng: "12.483333"
        },
        {
          key: "stuttgart",
          name: "Stuttgart",
          dropname: "Stuttgart, Germany",
          lat: "48.775556",
          lng: "9.182778"
        },
        {
          key: "sydney",
          name: "Sydney",
          dropname: "Sydney, Australia",
          lat: "-33.85",
          lng: "151.2"
        },
        {
          key: "telaviv",
          name: "Tel Aviv",
          dropname: "Tel Aviv, Israel",
          lat: "32.066667",
          lng: "34.783333"
        },
        {
          key: "tokyo",
          name: "Tokyo",
          dropname: "Tokyo, Japan",
          lat: "35.683889",
          lng: "139.774444"
        },
        {
          key: "toronto",
          name: "Toronto",
          dropname: "Toronto, Canada",
          lat: "43.66135",
          lng: "-79.383087"
        },
        {
          key: "warsaw",
          name: "Warsaw",
          dropname: "Warsaw, Poland",
          lat: "52.216667",
          lng: "21.033333"
        },
        {
          key: "yaren",
          name: "Yaren",
          dropname: "Yaren, Nauru",
          lat: "-0.543425",
          lng: "166.919608"
        }
      ],
      selectedCity: {
        key: "berlin",
        name: "Berlin",
        dropname: "Berlin, Germany",
        lat: "52.520008",
        lng: "13.404954"
      },
      handleChange: event => {
        const selectedValue = event.target.value;
        const cityArray = this.state.cities.filter(
          city => city.key === selectedValue
        );
        this.setState({ selectedCity: cityArray[0] });
        this.fetchData(cityArray[0]);
      },
      weatherData: {}
    };
  }
  fetchData = selectedCity => {
    const { lat, lng } = selectedCity;
    const url = `https://darksky.sklinkusch.now.sh/?${lat},${lng}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ weatherData: data }))
      .catch(error => console.error);
  };
  componentDidMount() {
    this.fetchData(this.state.cities[0]);
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
