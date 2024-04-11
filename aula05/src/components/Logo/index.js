import { View, Image } from 'react-native'
import {styles} from './styles'

function Logo(){
  return(
      <View style={styles.viewImagem}>
        <Image 
          source={{uri: 'https://www.dorcronica.blog.br/web/wp-content/uploads/2022/09/o-indice-de-massa-corporal-imc-e-impreciso-e-enganoso.png'}}
          style={styles.imagem}
        />
      </View>
  )
}

export default Logo