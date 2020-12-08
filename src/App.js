import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title:'what is React',
        content: 'React is a front end javascript framework'
    },

    {
        title:'what is Angular',
        content: 'Angular is a front end javascript framework'
    },

    {
        title:'what is Vue',
        content: 'Vue is a front end javascript framework'
    },
]

const options = [
    {
        label:'church',
        value:'GFFLA'
    },
    {
        label:'enugu',
        value:'KD'
    },
    {
        label:'pastor',
        value:'prophet ekwueme'
    },
]

export default ()=>{ 
    const [selected, setSelected]= useState(options[0])
    return (
            <div>
                <Header />
                <Route path="/">
                    <Accordion items={items} />
                </Route>

                <Route path="/list">
                    <Search />
                </Route> 

                <Route path="/dropdown">
                    <Dropdown
                        label ="select a color"
                         options = {options}
                         selected={selected}
                         onSelectedChange={setSelected}
                     />
                </Route>

                <Route path="/translate">
                    <Translate />
                </Route>     
            </div>
        );
};