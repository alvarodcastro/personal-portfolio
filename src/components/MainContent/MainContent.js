import "./MainContent.css"
import About from "../About/About";

import myphoto from "../../monkey.jpg"
import Ideas from "../Ideas/Ideas";
import Work from "../Work/Work";
import React from "react";


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}

let callback = (entries) => {
    for (let i = 0; i<entries.length; i++){
        if (entries[i]['isIntersecting'])
        {
            let id = entries[i]['target'].id;
            let element = entries[i]['target'];

            element.classList.remove("Inv-Class")
            //Class: An-App-{id} will make the element appearance
            element.classList.add("An-App-".concat(id))
        }
    }
}
let observer = new IntersectionObserver(callback, options);

function addToObserver() {
    let divArray = document.querySelectorAll(".Inv-Class")
    let el = null;
    for (let i=0; i<divArray.length; i++) {
        el = divArray.item(i)
        try{
            observer.observe(el)
        }catch (error)
        {
            console.log(error)
        }
    }
};

export default class MainContent extends React.Component{
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        addToObserver()
    }

    render() {
        return (
            <div>
                {/*<Skeleton>*/}
                <div className={"MainContent-class"} id={"mainContent"}>
                    <div className={"MainContent-Subdiv Inv-Class"} id={"about"}>
                        <About photo={myphoto}></About>
                    </div>
                    <div className={"MainContent-Subdiv Inv-Class"} id={"work"}>
                        <Work></Work>
                    </div>
                </div>
                {/*</Skeleton>*/}
            </div>

        )
    }
}
