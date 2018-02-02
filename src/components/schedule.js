import React from 'react'

export default (props)=> {
    const dayList = props.days.map((item, index)=>{

        return (
            <div className='timesBox' key={index}>
                <div className='dayAndTime'>
                        <span>{item.day}<br/>
                            {item.time}
                        </span>
                </div>
                <div className='flavorBox'>
                    <span>{item.macaronOne}</span>
                    <img src={item.macaronOneSrc[item.macaronOneSrcName]}/>
                </div>
                <div className={`flavorBoxTwo ${item.classTwo}`}>
                    <span>{item.macaronTwo}</span>
                    <img src={item.macaronTwoSrc[item.macaronTwoSrcName]}/>
                </div>
            </div>
        )
    })

    return (
        <div className='scheduleSection'>
            {dayList}
        </div>
    )
}