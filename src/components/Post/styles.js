import { StyleSheet } from 'react-native'

const marginLeft = 20
const marginRight = 20

export const styles = StyleSheet.create({
  box: {
    width: '90%',
    borderRadius: 3,
    margin: 20,
    backgroundColor: '#fff',
    height: 250,
  },
  tituloBox: {
    marginTop: 20,
    marginLeft,
    marginRight,
  },
  nomeBox: {
    marginTop: 5,
    marginLeft,
    marginRight,
    borderBottomColor: '#dcdcdc',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  textoBox: {
    marginTop: 20,
    marginLeft,
    marginRight,
    marginBottom: 20,
  },

  titulo: {
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 12,
    color: 'gray',
  },
  texto: {},
})
