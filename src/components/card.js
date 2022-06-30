import React from 'react';
import { Text, View, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import { Colors, API } from '../constants';
import styles from './styles';

const Card = (props) => {
   const { poster_path,
      original_title,
      title,
      popularity,
      release_date,
      overview,
      adult,
      original_language } = props.data;
   return (
      <View style={styles.container}>
         <View style={{ flex: 0.35 }}>
            <Image source={{ uri: API.image + poster_path }} style={styles.img} />
            <View style={styles.progress}>
               <ProgressCircle
                  percent={popularity}
                  radius={20}
                  borderWidth={4}
                  color={Colors.progressBard}
                  shadowColor={Colors.progressShadow}
                  bgColor={Colors.progressBG}
               >
                  <Text style={{ fontSize: 12, color: Colors.progressShadow }}>{popularity.toFixed(0)}%</Text>
               </ProgressCircle>
            </View>
         </View>
         <View style={{ flex: 0.65, marginLeft: 16 }}>

            <Text numberOfLines={2} style={styles.originalTitle} >#{props.index + 1} {original_title}</Text>
            <Text numberOfLines={2} style={styles.title} >({title})</Text>

            <View style={styles.details}>
               <Text style={styles.normalFont} >{release_date} ({original_language})</Text>
               {adult && <View style={styles.adultContainer}><Text style={{ ...styles.normalFont, fontSize: 4 }} >  {'\u2B24'} </Text><Text style={styles.adult}>All</Text></View>}
            </View>
            <Text numberOfLines={4} style={styles.normalFont} >{overview}</Text>
         </View>
      </View>
   );
}

export default Card;