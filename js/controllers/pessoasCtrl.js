angular.module("App").controller("pessoasCtrl", function ($scope, $http) {
    $scope.app = "Pessoas e Endereços";
    $scope.novaPessoa = "Novo Cadastro";
    $scope.pessoas = [];

    var carregarPessoas = function () {
        $http.get("https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll", {
            headers: {
                chave: "42B22EC7-9941-4708-9692-4E397A7D6A97"
            }
        }).then(function (response) {
            $scope.pessoas = response.data.data;
        });
    };

    $http.get("https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll", {
        headers: {
            chave: "42B22EC7-9941-4708-9692-4E397A7D6A97"
        }
    }).then(function (response) {
        $scope.pessoas = response.data.data;
    });

    $scope.convertDate = function (dataNascimento) {
        var data = new Date(dataNascimento);
        return data.toLocaleDateString();
    }

    $scope.adicionarPessoa = function (pessoa) {
        $http.post("https://www.selida.com.br/avaliacaotecnica/api/Pessoas", pessoa, {
            headers: {
                chave: "42B22EC7-9941-4708-9692-4E397A7D6A97"
            }
        }).then(function (response) {
            delete $scope.pessoa;
            //console.log(pessoa);
            carregarPessoas();
        });
    };

    $scope.classe = "selecionado";
    $scope.id = "pessoaId";

    $scope.apagarPessoa = function(pessoas){
      $scope.pessoas = pessoas.filter(function(pessoa){
          if (!pessoa.selecionado) return pessoa,
            $http.delete("https://www.selida.com.br/avaliacaotecnica/api/Pessoas", id, {
                headers: {
                    chave: "42B22EC7-9941-4708-9692-4E397A7D6A97",
                    path: "pessoaId"
                }
            }).then(function (response) {
                delete $scope.pessoa;
                console.log(pessoa);
                carregarPessoas();
            });
        });
    };

});