import React, { useEffect, useState } from 'react';

import { Select } from 'antd';

import Style from '../scss/filter.module.scss';
import 'antd/dist/antd.css';

const { Option } = Select;

// import FilterList from "./filterList";
// import { createStore } from "redux";
// import Bottom from "./bottom";

function Filter(props) {
  const [stamp, setStamp] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const activeStamp = (value) => {
    setStamp(value);
    console.log(value);
  };

  const activeModel = (value) => {
    setModel(value);
    console.log(value);
  };

  const activeYear = (value) => {
    setYear(value);
    console.log(value);
  };

  useEffect(() => {
    if (stamp && model && year) {
      props.activeFilter(true);
    } else {
      props.activeFilter(false);
    }
  }, [stamp, model, year, props]);

  ///////////////Получение марок авто/////////////////

  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    fetch('https://stage.auto.mts.ru/web/api/v1/cars/brands')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setBrands(arr);
      });
  }, []);

  //////////////Получение моделей авто//////////////////

  const [models, setModels] = React.useState([]);

  const getCarModels = (id) => {
    fetch(`https://stage.auto.mts.ru/web/api/v1/cars/models?carBrandId=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setModels(arr);
      });
  };

  //////////////////Получение года авто///////////////////

  const [years, setYears] = React.useState([]);

  const getCarYears = (id) => {
    fetch(`https://stage.auto.mts.ru/web/api/v1/cars/panels?carModelId=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        console.log(arr);
        setYears(arr);
      });
  };

  let yearsOfCar;

  const [currentModel, setCurrentModel] = React.useState('Выбрать модель авто');
  const [currentYear, setCurrentYear] = React.useState('Год выпуска');

  return (
    <div>
      <form className={Style.filter}>
        <Select
          listHeight={160}
          defaultValue="Выбрать марку авто"
          className={Style.filterSelect}
          dropdownClassName={Style.list}
          onChange={(value) => {
            getCarModels(value);
            setCurrentModel('Выбрать модель авто');
            setCurrentYear('Год выпуска');
          }}>
          {brands.map((props) => {
            return (
              <Option key={props.id} value={props.id} name={props.name}>
                {props.name}
              </Option>
            );
          })}
        </Select>

        <Select
          disabled={models.length <= 0 ? true : false}
          listHeight={160}
          defaultValue="Выбрать модель авто"
          value={currentModel}
          className={Style.filterSelect}
          name="model"
          onChange={(value) => {
            getCarYears(value);
            setCurrentModel(value);
            setCurrentYear('Год выпуска');
          }}>
          {models.map((props) => {
            return (
              <Option key={props.id} value={props.id}>
                {props.name}
              </Option>
            );
          })}
        </Select>

        <Select
          disabled={years.length <= 0 ? true : false}
          listHeight={160}
          defaultValue="Год выпуска"
          value={currentYear}
          className={Style.filterSelect}
          name="year"
          onChange={(value) => setCurrentYear(value)}>
          {years[0]?.yearPanelsList.map((element) => {
            // yearsOfCar = ;
            // {console.log(yearsOfCar)}
            return <Option key={element.year}>{element.year}</Option>;
          })}
        </Select>
      </form>
    </div>
  );
}

export default Filter;

/////////////

// const defaultState = {

// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

///////////////////

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stamp: "",
//       model: "",
//       year: "",
//     };
//     this.onChangeHandler = this.onChangeHandler.bind(this);
//   }
//   onChangeHandler(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form className={Style.filter}>
//           <select
//             className={Style.filterSelect}
//             name="stamp"
//             value={stamp}
//             onChange={this.onChangeHandler}
//           >
//             <option>Выбрать марку авто</option>
//             <option value="Lada">Lada</option>
//             <option value="BMW">BMW</option>
//             <option value="Mercedes-Benz">Mercedes-Benz</option>
//             <option value="Ferrari">Ferrari</option>
//           </select>
//           <select
//             className={Style.filterSelect}
//             name="model"
//             value={model}
//             onChange={this.onChangeHandler}
//           >
//             <option>Выбрать модель авто</option>
//             <option value="red">red</option>
//             <option value="blue">blue</option>
//             <option value="grey">grey</option>
//             <option value="purple">purple</option>
//           </select>
//           <select
//             className={Style.filterSelect}
//             name="year"
//             value={year}
//             onChange={this.onChangeHandler}
//           >
//             <option>Год выпуска</option>
//             <option value="2000">2000</option>
//             <option value="2001">2001</option>
//             <option value="2002">2002</option>
//             <option value="2003">2003</option>
//           </select>
//         </form>
//         {/* <div style={{ position: "absolute", bottom: "0", left: "0" }}>
//           <hr />
//           <p>State of Component</p>
//           <pre>{JSON.stringify(this.state, null, 2)}</pre>
//         </div> */}
//         {console.log(this.state)}
//       </div>
//     );
//   }
// }
