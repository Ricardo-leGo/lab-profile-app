import React from 'react'
import '../../styles/cardProject.css'

export default function CardProject(props) {
    return (
        <div className="cardProject">
            <h1>Project Name</h1>
            <input type="checkBox" name="nameofproject" />
            <h2>Type of Project</h2>
            <p>Description Project</p>
            <h3>Tecnologías</h3>
            <div className="contentTags">
                <span>MERNStack</span>
                <span>Phothoshop</span>
                <span>CorelDraw</span>
                <span>Adobde XD</span>
            </div>
        </div>
    )
}
