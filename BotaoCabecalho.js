import Cores from '../constantes/Cores'
import React from 'react';
import {Plataform} from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import _default from 'expo/build/Notifications/Notifications';

const BotaoCabecalho = (props) => {
    return (
        <HeaderBackButton 
        {...props}
        IconComponent= {Ioniccons}
        iconSize= {23}
        color= {Plataform.OS == 'android' ? 'black' : Cores.primary}
        />
    );
}
export default BotaoCabecalho;