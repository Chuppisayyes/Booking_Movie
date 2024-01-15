import { Tabs, Tab, Container, ButtonBase } from '@mui/material'
import React, { useState } from 'react'
import style from './NewsStyle.module.scss'
import { CustomTabPanel, a11yProps } from '../../../CustomTabPanel'

export default function News() {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const pages = ["Điện Ảnh 24h", "Review", "Khuyến mãi"]

    return (
        <div>
            <div style={{ paddingTop: '55px' }} id={2}></div>
            <div className={style.jss1}>
                <Container maxWidth="md" >
                    <Tabs centered value={value} onChange={handleChange} className={style.jss2}>
                        {pages.map((page, index) => {
                            return (
                                <Tab type='button' label={page} {...a11yProps({ index })} className={style.jss3} />
                            )
                        })}
                    </Tabs>
                    {pages.map((page, index) => {
                        return (
                            <CustomTabPanel value={value} index={index}></CustomTabPanel>
                        )
                    })}

                    <div className={style.jss4}>
                        <ButtonBase className={style.jss5}>XEM THÊM</ButtonBase>
                    </div>
                </Container>
            </div>
        </div>
    )
}
