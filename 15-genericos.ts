function identity<T>(value: T) {
    return value;
}

identity(1);
identity("asd");
identity(true);
identity({
    name: "John Doe"
});
identity(() => "A function");