const getUpdateValue = async () => {

    const dataReq = await axios.get(`https://api.covid19api.com/summary`) // WORKING API for daily cases

    for (let i = 1; i <= 193; i++) {
        const select = document.querySelector('select')
        const newOption = document.createElement('option')
        const setAttribute = newOption.setAttribute('value', i)
        newOption.append(dataReq.data.Countries[i].Country)
        select.append(newOption)

    }

      // DATE 

      const lastUpdate = document.querySelector('.lastUpdate')
      const dateH2 = document.createElement('h3')
      const date = dataReq.data.Global.Date
      dateH2.append(date)
      lastUpdate.append(dateH2)


     //GLOBAL CASES
     const newGlobalCases = document.querySelector('.newGlobalCases')
     const newGlobalCasesOption = document.createElement('h2')
    //  newGlobalCases.innerHTML = ''
     const globalCasesData = dataReq.data.Global.NewConfirmed;
     newGlobalCasesOption.append(globalCasesData)
     newGlobalCases.append(newGlobalCasesOption)
 
     const newGlobalDeaths = document.querySelector('.newGlobalDeaths')
     const newGlobalDeathsOption = document.createElement('h2')
    //  newGlobalDeaths.innerHTML = ''
     const globalDeathsData = dataReq.data.Global.NewDeaths;
     newGlobalDeathsOption.append(globalDeathsData)
     newGlobalDeaths.append(newGlobalDeathsOption)
 
     const newGlobalRecovered = document.querySelector('.newGlobalRecovered')
     const newGlobalRecoveredOption = document.createElement('h2')
    //  newGlobalRecovered.innerHTML = ''
     const globalRecoveredData = dataReq.data.Global.NewRecovered;
     newGlobalRecoveredOption.append(globalRecoveredData)
     newGlobalRecovered.append(newGlobalRecoveredOption)

     // TOTAL GLOBAL DATA

     const totalGlobalCases = document.querySelector('.totalGlobalCases')
     const totalGlobalCasesOption = document.createElement('h3')
    //  newGlobalCases.innerHTML = ''
     const totalGlobalCasesData = dataReq.data.Global.TotalConfirmed;
     totalGlobalCasesOption.append(totalGlobalCasesData)
     totalGlobalCases.append(totalGlobalCasesOption)
 
     const totalGlobalDeaths = document.querySelector('.totalGlobalDeaths')
     const totalGlobalDeathsOption = document.createElement('h3')
    //  newGlobalDeaths.innerHTML = ''
     const totalGlobalDeathsData = dataReq.data.Global.TotalDeaths;
     totalGlobalDeathsOption.append(totalGlobalDeathsData)
     totalGlobalDeaths.append(totalGlobalDeathsOption)
 
     const totalGlobalRecovered = document.querySelector('.totalGlobalRecovered')
     const totalGlobalRecoveredOption = document.createElement('h3')
    //  newGlobalRecovered.innerHTML = ''
     const totalGlobalRecoveredData = dataReq.data.Global.TotalRecovered;
     totalGlobalRecoveredOption.append(totalGlobalRecoveredData)
     totalGlobalRecovered.append(totalGlobalRecoveredOption)



   
}

// CALLING FUNTION
getUpdateValue()


const getSelectedData = async () => {

    const dataReq = await axios.get(`https://api.covid19api.com/summary`) // WORKING API for daily cases


    const selectedValue = document.querySelector('select').value
    console.log(dataReq)




    const countryDataReq = await axios.get(`https://api.covid19api.com/dayone/country/${dataReq.data.Countries[selectedValue].Slug}/status/confirmed `)// WORKING API for daily cases
    console.log(countryDataReq.data)
    console.log(dataReq.data.Countries[selectedValue].Slug)

    const lat = countryDataReq.data[selectedValue].Lat
    const lon = countryDataReq.data[selectedValue].Lon

    
    const cases = dataReq.data.Countries[selectedValue].NewConfirmed;






    if (cases < 1) {
        color = "rgb(102, 255, 153)";//light green
        console.log(color)
    }
    else if (cases < 100) {
        color = "rgb(0, 148, 30)";//drak green
        console.log(color)
    }
    else if (cases < 1000) {
        color = "rgb(0, 128, 43)";// darkest green
        console.log(color)
    }
    else if (cases < 5000) {
        color = "rgb(255, 102, 102)";// light red
        console.log(color)
    }
    else if (cases < 10000) {
        color = "rgb(255, 51, 51)";// red
        console.log(color)
    }

    else if (cases < 25000) {
        color = "rgb(230, 0, 0)";// dark red
        console.log(color)
    }
    else if (cases < 50000) {
        color = "rgb(153, 0, 0)";
        console.log(color)
    }
    else if (cases > 50000) {
        color = "rgb(77, 0, 0)";
        console.log(color)
    }
    
    

        // color variable

 

    //    const colorVar = document.documentElement
    //    colorVar.style.setProperty('--blue', color)
        // DAILY CASES
        const newCases = document.querySelector('.newCasesH1')
        const newCasesOption = document.createElement('span')
        newCasesOption.style.color = color;
        newCases.innerHTML = ''
        const casesData = dataReq.data.Countries[selectedValue].NewConfirmed;
        newCasesOption.append(casesData)
        newCases.append(newCasesOption)
    
        

        const newDeaths = document.querySelector('.newDeathsH1')
        const newDeathsOption = document.createElement('span')
        newDeathsOption.style.color = color;
        newDeaths.innerHTML = ''
        const deathsData = dataReq.data.Countries[selectedValue].NewDeaths;
        newDeathsOption.append(deathsData)
        newDeaths.append(newDeathsOption)
    
        const newRecovered = document.querySelector('.newRecoveredH1')
        const newRecoveredOption = document.createElement('span')
        newRecoveredOption.style.color = color;
        newRecovered.innerHTML = ''
        const recoveredData = dataReq.data.Countries[selectedValue].NewRecovered;
        newRecoveredOption.append(recoveredData)
        newRecovered.append(newRecoveredOption)

        // TOTAL CASES

        const totalCases = document.querySelector('.totalCases')
        const totalCasesOption = document.createElement('span')
        totalCasesOption.style.color = color;
        totalCases.innerHTML = ''
        const totalConfirmedC = dataReq.data.Countries[selectedValue].TotalConfirmed;
        totalCasesOption.append(totalConfirmedC)
        totalCases.append(totalCasesOption)

        const totalDeaths = document.querySelector('.totalDeaths')
        const totalDeathsOption = document.createElement('span')
        totalDeathsOption.style.color = color;
        totalDeaths.innerHTML = ''
        const totalConfirmedD = dataReq.data.Countries[selectedValue].TotalDeaths;
        totalDeathsOption.append(totalConfirmedD)
        totalDeaths.append(totalDeathsOption)

        const totalRecovered = document.querySelector('.totalRecovered')
        const totalRecoveredOption = document.createElement('span')
        totalRecoveredOption.style.color = color;
        totalRecovered.innerHTML = ''
        const totalConfirmedR = dataReq.data.Countries[selectedValue].TotalRecovered;
        totalRecoveredOption.append(totalConfirmedR)
        totalRecovered.append(totalRecoveredOption)


        
        


        //MAPBOX
        const marker = new mapboxgl.Marker({
            
            draggable: false,
            color: color,

        })
        
            .setLngLat([lon, lat])
            .addTo(map);
    }

