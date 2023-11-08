
export default function transformCodePlugin(options = {}) {
  console.log('option', options)
	return {
		name: 'transform-code',
		transform(code, id) {
      // console.log('code', code)
      console.log('id', id)
			// 进行转换。。。
			return {
				code: 'export default 10',
				// map: generatedSourceMap
			};
		},
    load(id) {
      console.log('id', id)
    }
	};
}