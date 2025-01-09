export default function Post() {


    return (
        <>
            <div id='post'>
                <form action="" method="post" name="member-form" id="member-form" title="會員資料修改">
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" title="姓名" placeholder="NAME" required
                        autoFocus></input>
                    <label htmlFor="other">TYPE</label>
                    <select name="other" id="other">
                        <option value="">TYPE</option>
                        <optgroup label="分類一">
                            <option value="選項1">選項1</option>
                            <option value="選項2">選項2</option>
                            <option value="選項3">選項3</option>
                            <option value="選項4">選項4</option>
                        </optgroup>
                        <optgroup label="分類二">
                            <option value="選項1">選項1</option>
                            <option value="選項2">選項2</option>
                            <option value="選項3">選項3</option>
                            <option value="選項4">選項4</option>
                        </optgroup>
                    </select>
                    <label htmlFor="HEIGHT">HEIGHT</label>
                    <input type="text" name="text" id="text" title="text" placeholder="HEIGHT" required>
                    </input>
                    <label htmlFor="WEIGHT">WEIGHT</label>
                    <input type="text" name="text" id="text" title="text" placeholder="WEIGHT" required>
                    </input>
                    <label htmlFor="">UPLOAD IMAGE</label>
                    <input type="file" name="file" id="upload" title="file" className="filestyle" multiple></input>
                    {/* multiple選多個項目 */}
                    <small>僅可上傳jpg。gif、png、pdf</small>

                    <label htmlFor="message">留言:</label>
                    <textarea name="message" id="message" title="message" rows="10"></textarea>
                    <div>
                        <button type="reset" name="reset-btn" id="reset-btn" value="重填資料">SUMBIT</button>
                        <button type="submit" name="submit-byn" id="submit-id" value="送出資料">RESET</button>
                    </div>

                </form>
            </div>

        </>
    )
}