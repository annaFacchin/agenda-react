import React from "react";

import { Calendar } from 'antd';


export default function CalendarMain() {

    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (<Calendar onPanelChange={onPanelChange} />,
        document.getElementById('root'));

}