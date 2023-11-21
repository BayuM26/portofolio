function FCI({ labelInput, typeInput = "text", placeholderInput, autoFocus = false, name, id = name ,accept='', change}) {
    if (typeInput == "file") {
        var file=true;
    }
    return (
        <div className="form-control w-full max-w-xl">
            <label className="label">
                <span className="label-text uppercase">{labelInput}</span>
            </label>
            <input name={name} onChange={change} id={id} autoFocus={autoFocus} type={typeInput} placeholder={placeholderInput} className={(file? "file-input file-input-bordered w-full" :"input input-bordered w-full")} accept={accept} />
        </div>
    )
}

export default FCI