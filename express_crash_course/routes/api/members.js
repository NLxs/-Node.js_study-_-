const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// 获取所有用户
router.get('/', (req, res)=> { 
  res.json(members)
});
// 获取单个用户
router.get('/:id', (req, res)=> {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 创建用户
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email) {
    res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json('members');
  // 添加的内容在首页显示
  // res.redirect('/');
});

// 更新用户
router.put('/:id', (req, res)=> {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    const updMember = req.body;
    members.forEach(member => {
      if(member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : this.member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: 'Member updated', member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 删除用户
router.delete('/:id', (req, res)=> {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json({ 
      msg: 'Member delete', 
      members: members.filter(member => member.id !== parseInt(req.params.id)) 
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
module.exports = router;