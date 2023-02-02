exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            title: 'test post',
            content: 'blah blah'
        }]
    })
}

exports.getReportSotheoDoiCapPhat = (req, res, next) => {
    res.status(200).json({
        data: [
            {
                _id:'1',
                loaiMucDich: 'Đất trồng cần',
                maMucDich: 'DTC',
                soLuongThua: '6',
                dienTich: '2000',
            },
            {
                _id:'2',
                loaiMucDich: 'Đất xây dựng',
                maMucDich: 'RTX',
                soLuongThua: '2',
                dienTich: '14000',
            },
            {
                _id:'3',
                loaiMucDich: 'Đất trồng cần',
                maMucDich: 'DTC',
                soLuongThua: '3',
                dienTich: '5000',
            },
        ]
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
//    create post in db

    console.log(title, content)
    res.status(201).json({
        message: 'post created',
        post: {
            id: new Date().toDateString(),
            title: title,
            content: content
        }
    })
}