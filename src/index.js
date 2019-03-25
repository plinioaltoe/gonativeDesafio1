import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import './config/ReactotronConfig'
//import './config/DevToolsConfig'
import { styles } from './styles'
import { content as posts } from './content'
import Post from './components/Post'

export default class App extends Component {
  state = {
    posts,
  }

  render() {
    const { posts } = this.state
    return (
      <ScrollView style={styles.container}>
        {posts.map(post => (
          <Post key={post.id} titulo={post.titulo} texto={post.texto} nome={post.nome} />
        ))}
      </ScrollView>
    )
  }
}
