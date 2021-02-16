---
titulo: Renomeie seus aplicativos com React Native Rename
descricao:  O Jeito mais fácil de você renomear suas aplicações React Native
autor: Rodrigo Dias Noronha
slug: renomeie-seus-aplicativos-com-react-native-rename
data: Sun Feb 14 2020 16:35:34 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa_400x400.jpg
---

Olá, pessoal.

Este post é mais uma dica do que um tutorial.

Acabei me deparando de repente com uma lib do React Native que me chamou bastante atenção, que é a React Native Rename.

Com ela é bem simples nomear e renomear seu aplicativo, com um simples comando no terminal e, boom... Acabou. Então vamos lá.


### Renomeando aplicativo.

Basta rodar o seguinte comando no terminal:

```bash
    $ npx react-native-rename <novoNome>
```

Se tudo ocorrer perfeitamente, aparecerá a mensagem abaixo e tanto seu app Android quando IOS terão sido renomeados.

Para projetos criados com a própria CLI do React Native, acredito que automatizar esse processo de renomeação já dá um upzinho legal no desenvolvimento das aplicações.

Lembro que é legal você apagar todo o cache se você rodou a aplicação anteriormente e, como diz o print acima, rodar o comando pod install caso esteja usando um dispositivo IOS.

Queria só deixar essa dica, pessoal. Obrigado por lerem. Até uma próxima.


### PS: Leia

Parece que em versões recentes do RN esta lib não está funcionando, ela acaba apagando alguns arquivos que garantem a execução do aplicativo no Android e IOS. Ela não recebe atualização há 1 ano, então era de se esperar...
