import ReactDOM from "react-dom";
import {cleanup} from '@testing-library/react';
import BarChart from '../BarChart';
import { Provider } from "react-redux";
import { store } from "../../../Store/Store";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup)

const biomarkers = {
    heartRate:{
        date:["2021-11-01","2021-12-01","2022-01-01","2022-02-01","2022-03-01","2022-04-01"],
        value:[52,55,77,79,80,80]}
    };

const Bar = () => {
    return( 
        <Provider store={store}>
                <BrowserRouter>
                    <BarChart
                    title='Heart Rate'
                    labels={["2021-11-01","2021-12-01","2022-01-01","2022-02-01","2022-03-01","2022-04-01"]}
                    data ={[52,55,77,79,80,80]}
                    periodicity='month'
                    colour="#AE1A2C"
                    biomarker={biomarkers}
                    titleContainerClass="expandedTitleContainer"
                    graphClass = "expandedGraphContainer"
                    titleClass= "expandedGraphTitle"
                    navigate="/biomarkersoverview/"
                />
                </BrowserRouter>
        </Provider>   
    )
}   

test("Renders bar chart successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bar/> , div);
    ReactDOM.unmountComponentAtNode(div);
})
