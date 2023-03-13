<!--
    CURSO JAVASCRIPT - CURSO EM VÍDEO

        -- INFORMAÇÕES HISTÓRICAS --
        
            -- JavaScript -> Baseado em C
            -- EcmaScript -> Linguagem JavaScript padronizada
            -- Ecma -> Agência de padronização da Europa
            -- NodeJs -> Possibilitou a utilização do JS fora do browser -> Utilização no server-side

        -- Aula 04

            -- window -> Objeto referente a janela do browser
            -- .alert -> Função que exibe uma janela de alerta
            -- .confirm -> Janela de alerta que exige uma confirmação
            -- .prompt -> Janela que possui um campo para preenchimento

        -- Aula 05

            -- VARIÁVEIS --

            -- Podem começar com letra, $ ou _
            -- Não podem começar com números
            -- É possível usar letras ou números
            -- É possível usar acentos e símbolos
            -- Não podem conter espaços
            -- Não podem ser palavras reservadas

            -- Declaração -> var ou let

            -- TIPAGEM --

            -- number (Infinity e NaN) / string / boolean / null / undifined / object (Array) / function


        -- Aula 06

            -- TRATAMENTO DE DADOS --

            -- (number + number) -> Adição
            -- (string + string) -> Concatenação
            -- Necessário realizar a conversão (Number.parseInt(n)...parseFloat(n)) -> Number(n) -> Modo simplificado

            -- String(n) ou n.toString()

            -- FORMATANDO STRINGS --

            var s = 'JavaScript'
            'Eu estou aprendendo s' -> Não faz interpolação
            'Eu estou aprendendo' + s -> Usa concatenação
            `Eu estou aprendendo ${s}` -> Usa template string 
            (${} -> Placeholder)

        -- Aula 07

            -- OPERADORES --

            -- Aritméticos

            + -> Adição
            - -> Subtração
            * -> Multiplicação
            / -> Divisão real
            % -> Resto da divisão inteira
            ** -> Potência

            -- Atribuição

            = -> Atribuição
            ++x -> Pré-incremento
            x++ -> Pós-incremento
            --x -> Pré-decremento
            x-- -> Pós-decremento

        -- Aula 08

            -- OPERADORES --    

            -- Relacionais

            > -> Maior
            < -> Menor
            >= -> Maior ou igual
            <= -> Menor ou igual
            == -> Igual -> Não testa o tipo da variável
            === -> Identidade -> Testa o valor e o tipo da variável
            != -> Diferente
            !== -> Desigual restrito

            -- Lógicos

            ! -> Negação
            && -> Conjunção (E Lógico)
            || -> Disjunção (OU Lógico)

            Precedência -> Operador Aritmético / Relacional / Lógico

            -- Ternário

            ? : -> teste ? true : false 

        -- Aula 10

            -- DOM --

            -- Document Object Model

            -- Árvore DOM

            -- window ->
                        location
                        history
                        document ->
                                html ->
                                        head
                                        body

            -- Métodos de acesso

            -- por marca -> getElementsByTagName()
            -- por ID -> getElementsByID()
            -- por nome -> getElementsByName()
            -- por classe -> getElementsByClassName()
            -- por seletor -> querySelector() / querySelectorAll() -> div#msg (tag + id) / div.msg (tag + classe)

            -- Eventos DOM

            Funções -> Ações realizadas com o evento disparado

            function acao(){
                
            }

        -- Aula 11

            -- CONDIÇÕES -- 
            
            if(){

            }

            if(){

            }else{

            }   

            if(){

            }elseif(){

            }else{

            }

        -- Aula 15

            -- ESTRUTURA DE REPETIÇÃO --

            while(){

            }   

            do{

            }while()

            for(){

            }   

            for(  in  ){

            }     

        -- Aula 16

            -- FUNÇÕES --

              
--> 

