import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';

export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isCamera, setIsCamera] = useState(false);
    const [techs, setTechs] = useState([]);


    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View>
            <Text>CAmera</Text>
        </View>
    )
}
