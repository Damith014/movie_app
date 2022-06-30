import React from 'react';
import { SafeAreaView, View, FlatList, Alert } from 'react-native';
import Loader from 'react-native-modal-loader'
import Card from '../../components/card';
import data from '../../../assets/sample'
import styles from './styles';
import { connect } from 'react-redux'
import { fetchList } from '../../redux/actions'

var move_List = [];
class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         page: 1,
         isFetching: false
      }
   }

   componentDidMount() {
      this.props.fetchData(this.state.page)
   }

   renderItem = ({ item, index }) => {
      return (
         <Card data={item} index={index}></Card>
      );
   };

   fetchMoreMovies = () => {
      this.setState(prevState => {
         return { page: prevState.page + 1 }
      });
      this.props.fetchData(this.state.page + 1)
   }

   async loadMovies() {
      const { loading, movies, error } = this.props;
      if (!loading) {
         if (error != null) {
            Alert.alert(
               "Oops!",
               error.status_message,
               [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
               ]
            );
         } else if (movies != null) {
            move_List = movies.results
         }
      }
   }
   onRefresh = async () => {
      this.setState({
         isFetching: true
      })
      this.props.fetchData(this.state.page)
      this.setState({
         isFetching: false
      })
   }

   render() {
      this.loadMovies();
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer}>
               {this.props.loading &&
                  <Loader
                     loading={true}
                     size={'small'} />
               }
               <FlatList
                  data={move_List}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  onEndReachedThreshold={0.2}
                  onEndReached={this.fetchMoreMovies}
                  onRefresh={this.onRefresh}
                  refreshing={this.state.isFetching}
               />
            </View>
         </SafeAreaView>
      )
   };
}

function mapStateToProps(state) {
   return {
      loading: state.mainReducer.isLoading,
      movies: state.mainReducer.moveList,
      error: state.mainReducer.error,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      fetchData: (page) => dispatch(fetchList(page))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)