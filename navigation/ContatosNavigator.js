
import { createStackNavigator } from 'react-navigation-stack';
import NewContactView from '../views/NewContactView';
import ListContactView from '../views/ListContactView';



import { createAppContainer } from 'react-navigation';


const ContatosNavigator = createStackNavigator({
    ListaDeContatos: ListContactView,
    NovoContato: NewContactView
});

export default createAppContainer(ContatosNavigator);
