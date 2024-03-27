import React from 'react';
import { EIconName } from './Icon.enum';
import MenuBar from "@/components/Icon/MenuBar";
import Flash from "@/components/Icon/Flash";
import Wallet from "@/components/Icon/Wallet";

const Icon = ({ name, className = '', color, style, onClick }) => {

    const renderIcon = () => {
        switch (name) {
            case EIconName.Wallet:
                return <Wallet />
            case EIconName.MenuBar:
              return <MenuBar />
            case EIconName.Flash:
              return <Flash />
            default:
                break;
        }
    }
    return (
        <div className={`flex justify-center items-center ${className}`} onClick={onClick}>
          {renderIcon()}
        </div>
    )
}
export default Icon;