function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function NF(string){
        return 'Named function';
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("Anonymous function");
}
