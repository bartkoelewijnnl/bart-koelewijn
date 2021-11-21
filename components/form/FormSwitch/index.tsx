import React, { FC, InputHTMLAttributes } from 'react';
import { Switch } from './styles';

export interface FormSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const FormSwitch: FC<FormSwitchProps> = (props) => {
    return (
        <Switch>
            <input type="checkbox" {...props} />
            <div className="switch" />
        </Switch>
    );
};

export default FormSwitch;
