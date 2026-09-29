import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [timeAzul, setTimeAzul] = useState(0);
  const [timeVermelho, setTimeVermelho] = useState(0);

  const limite = 25;

  const reiniciar = () => {
    setTimeAzul(0);
    setTimeVermelho(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PLACAR</Text>

      <Text style={styles.subtitulo}>
        VÔLEI • PRIMEIRO A {limite} VENCE!
      </Text>

      <View style={styles.linha} />

      <View style={styles.times}>
        <View style={styles.time}>
          <Text style={[styles.nomeTime, styles.azulClaro]}>
            TIME AZUL
          </Text>

          <Text style={styles.numero}>{timeAzul}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity
              style={[styles.botao, styles.botaoAzul]}
              onPress={() => setTimeAzul(timeAzul + 1)}
            >
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botao, styles.botaoAzulEscuro]}
              onPress={() =>
                setTimeAzul(Math.max(0, timeAzul - 1))
              }
            >
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.time}>
          <Text style={[styles.nomeTime, styles.vermelhoClaro]}>
            TIME VERMELHO
          </Text>

          <Text style={styles.numero}>{timeVermelho}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity
              style={[styles.botao, styles.botaoVermelho]}
              onPress={() => setTimeVermelho(timeVermelho + 1)}
            >
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botao, styles.botaoVermelhoEscuro]}
              onPress={() =>
                setTimeVermelho(Math.max(0, timeVermelho - 1))
              }
            >
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {timeAzul >= limite && (
        <Text style={[styles.vitoria, styles.vitoriaAzul]}>
          ★ TIME AZUL VENCEU ★
        </Text>
      )}

      {timeVermelho >= limite && (
        <Text style={[styles.vitoria, styles.vitoriaVermelho]}>
          ★ TIME VERMELHO VENCEU ★
        </Text>
      )}

      <TouchableOpacity
        style={styles.botaoReiniciar}
        onPress={reiniciar}
      >
        <Text style={styles.textoReiniciar}>
          [ REINICIAR ]
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#061A2F',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#E8F7FF',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 3,
    fontFamily: 'monospace',
  },

  subtitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8BCFFF',
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: 'monospace',
  },

  linha: {
    width: '80%',
    height: 2,
    backgroundColor: '#1C78A8',
    marginVertical: 30,
  },

  times: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  time: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#0B2742',
    borderWidth: 2,
    borderColor: '#174D70',
    paddingVertical: 25,
    borderRadius: 12,
  },

  nomeTime: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: 'monospace',
  },

  azulClaro: {
    color: '#6EC8FF',
  },

  vermelhoClaro: {
    color: '#FF6B6B',
  },

  numero: {
    fontSize: 64,
    fontWeight: '900',
    color: '#F2FBFF',
    marginVertical: 20,
    fontFamily: 'monospace',
  },

  botoes: {
    flexDirection: 'row',
    gap: 8,
  },

  botao: {
    width: 58,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  botaoAzul: {
    backgroundColor: '#168DD1',
  },

  botaoAzulEscuro: {
    backgroundColor: '#0D527D',
  },

  botaoVermelho: {
    backgroundColor: '#E94B4B',
  },

  botaoVermelhoEscuro: {
    backgroundColor: '#9E2929',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  vitoria: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: 'monospace',
  },

  vitoriaAzul: {
    color: '#69D6FF',
  },

  vitoriaVermelho: {
    color: '#FF6B6B',
  },

  botaoReiniciar: {
    marginTop: 30,
    width: 220,
    height: 52,
    backgroundColor: '#0D527D',
    borderWidth: 2,
    borderColor: '#2AA8E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  textoReiniciar: {
    color: '#E8F7FF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'monospace',
  },
});
