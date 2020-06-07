import React, { useState, useEffect } from "react"



function ComparisonContent(props) {
    return (
        <div className="sideBySide">
            <div className="comparisons-sideBySide">{props.case}</div>
            <div className="comparisons-sideBySide">{props.counterCase}</div>
        </div>
    )
}

export default ComparisonContent

