"""empty message

Revision ID: 3e8d487ac40b
Revises: e857e36ce13e
Create Date: 2023-04-02 19:19:52.314919

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e8d487ac40b'
down_revision = 'e857e36ce13e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('firstname', sa.String(length=42), nullable=False))
        batch_op.add_column(sa.Column('lastname', sa.String(length=42), nullable=False))
        batch_op.create_unique_constraint(None, ['firstname'])
        batch_op.create_unique_constraint(None, ['lastname'])
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('lastname')
        batch_op.drop_column('firstname')

    # ### end Alembic commands ###
