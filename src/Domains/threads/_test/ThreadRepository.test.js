const ThreadRepository = require('../ThreadRepository');
// const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository abstract', () => {
  it('should throw error when invoke abstract behavior', async () => {
    /**
     * @TODO 1
     * Lengkapi pengujian untuk `ThreadRepository` abstract
     * Pastikan semua fungsi yang ada di `ThreadRepository`
     * membangkitkan `Error` THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED
     *
     */

    // Arrange
    const threadRepository = new ThreadRepository();

    // Action
    const addThread = threadRepository.addThread({});
    const isThreadExist = threadRepository.isThreadExist('');
    const getThreadById = threadRepository.getThreadById('');

    // Assert
    await expect(addThread).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(isThreadExist).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(getThreadById).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
