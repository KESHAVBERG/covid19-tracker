import { formatMs } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './picker.module.css'
import { countryselector } from '../../api'

const Picker = ({handleCountryChange}) => {
    const [fectchcountries, setcountries] = useState([]);

    useEffect(() => {
        const countryGetter = async () => {
            setcountries(await countryselector());
        }

        countryGetter();
    }, [setcountries]);

    // console.log(fectchcountries)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="gobal">Gobal</option>

                {fectchcountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Picker;