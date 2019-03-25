import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from './styles'
import PropTypes from 'prop-types'

const Post = ({ titulo, nome, texto }) => (
  <ScrollView style={styles.box}>
    <View style={styles.tituloBox}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
    <View style={styles.nomeBox}>
      <Text style={styles.nome}>{nome}</Text>
    </View>
    <View style={styles.textoBox}>
      <Text styles={styles.texto}>{texto}</Text>
    </View>
  </ScrollView>
)

Post.propTypes = {
  texto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
}

export default Post
