import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Switch, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {APP_TITLE,INPUT_PLACEHOLDER, BUTTON_TEXT,LIST_TITLE, SWITCH_LABEL} from './labels';

export default function App() {
  const [disciplina, setDisciplina] = useState('');

  const [disciplinas, setDisciplinas] = useState([
    'Programação para Dispositivos Móveis',
    'Banco de Dados',
    'Engenharia de Software',
  ]);

  const [somenteObrigatorias, setSomenteObrigatorias] = useState(false);

  function adicionarDisciplina() {
    if (disciplina.trim() === '') return;

    setDisciplinas([...disciplinas, disciplina]);
    setDisciplina('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>{APP_TITLE}</Text>

      <View style={styles.linhaCadastro}>
        <TextInput
          style={styles.input}
          placeholder={INPUT_PLACEHOLDER}
          value={disciplina}
          onChangeText={setDisciplina}
        />

        <Pressable
          onPress={adicionarDisciplina}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.textoBotao}>{BUTTON_TEXT}</Text>
        </Pressable>
      </View>

      <View style={styles.linhaSwitch}>
        <Text style={styles.textoSwitch}>{SWITCH_LABEL}</Text>
        <Switch
          value={somenteObrigatorias}
          onValueChange={setSomenteObrigatorias}
        />
      </View>

      <Text style={styles.subtitulo}>{LIST_TITLE}</Text>
      <View style={styles.lista}>
        {disciplinas.map((item, index) => (
          <View key={index} style={styles.itemLista}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  linhaCadastro: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 16,
  },
  input: {
    flex: 0.7, 
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  botao: {
    width: '28%', 
    backgroundColor: '#4a6fa5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  botaoPressionado: {
    backgroundColor: '#375580', 
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linhaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 16,
  },
  textoSwitch: {
    fontSize: 14,
    color: '#333',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  lista: {
    flex: 1,
  },
  itemLista: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    margin: 6,
    borderRadius: 6,
  },
});